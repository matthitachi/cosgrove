import { Col, Container, Row } from "react-bootstrap";
// @ts-ignore
import styles from "./styles.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import * as React from "react";
import { ReactNode, useState } from "react";
import { getTeamMembers, ApiTeamMember } from "../../../Services/cosgroveApiServices";
import { useCmsData } from "../../../Hooks/useCmsData";

interface teamItemProp {
    img: string;
    name: string;
    position: string;
    mainText: ReactNode;
    collapse?: boolean;
    collapsibleText: ReactNode;
}

function TeamItem({ collapse = window.innerWidth < 576, ...prop }: teamItemProp) {
    const [isCollapse, setIsCollapse] = useState<boolean>(collapse);

    return (
        <Row className={styles.teamItem} data-aos="fade-up">
            <Col sm={12} lg={5} xl={3}>
                <div
                    className={`imageContainerEffect ${styles.teamImg}`}
                    style={{ background: `url("${prop.img}")` }}
                />
            </Col>
            <Col sm={12} lg={7} xl={9} className={styles.teamInfo}>
                <h4 className={"subHeader mb-4"}>{prop.position}</h4>
                <h2 className={"headerDark  mb-25"}>{prop.name}</h2>
                <div>
                    {prop.mainText}
                    {!isCollapse && prop.collapsibleText}
                </div>
                {collapse && (
                    <button className={'text'} onClick={() => setIsCollapse(!isCollapse)}>
                        {isCollapse ? 'Read More...' : 'Close...'}
                    </button>
                )}
            </Col>
        </Row>
    );
}

function toTeamItemProp(m: ApiTeamMember): teamItemProp {
    const collapse = window.innerWidth < 576;
    const bio = (m.bio || '').split('\n\n').filter(Boolean);
    const extended = (m.bio_extended || '').split('\n\n').filter(Boolean);
    return {
        img: m.photo_url || m.photo_thumb || '',
        name: m.name,
        position: m.position,
        collapse,
        mainText: (
            <div>
                {bio.map((para, i) => (
                    <p key={i} className={"textPrimary"}>{para}</p>
                ))}
            </div>
        ),
        collapsibleText: (
            <div>
                {extended.map((para, i) => (
                    <p key={i} className={"textPrimary"}>{para}</p>
                ))}
            </div>
        ),
    };
}

interface Props {
    heading?: string;
    subheading?: string;
}

export default function ({ heading, subheading }: Props) {
    React.useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    const { data: members } = useCmsData(getTeamMembers);

    return (
        <section className={styles.teamSection}>
            <Container>
                <div className={styles.teamHead} data-aos="fade-up">
                    <h4 className={"subHeader"}>{subheading ?? "The Core Team"}</h4>
                    <h2 className={"headerDark  mb-4"}>
                        {heading ?? "Meet the Minds Behind Cosgrove"}
                    </h2>
                </div>

                {(members ?? []).map((member, index) => {
                    const props = toTeamItemProp(member);
                    return (
                        <TeamItem
                            key={index}
                            img={props.img}
                            name={props.name}
                            position={props.position}
                            mainText={props.mainText}
                            collapsibleText={props.collapsibleText}
                            collapse={props.collapse}
                        />
                    );
                })}
            </Container>
        </section>
    );
}
