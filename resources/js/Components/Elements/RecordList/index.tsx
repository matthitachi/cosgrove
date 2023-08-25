import {Button, Col, Container, Nav, Navbar, NavDropdown, Row} from "react-bootstrap";
// @ts-ignore
import styles from "./styles.module.scss";
import * as React from "react";
// @ts-ignore
import arrowRightSvg from "/public/assets/svg/arrow-right.svg";
import VisibilitySensor from "react-visibility-sensor";
import CountUp from "react-countup";

export interface RecordItemProp {
    image: string;
    title: string;
    count: string;
    type?: number;
}
export const RecordItem = ({type = 1, ...prop}: RecordItemProp) => {

    function splitDigitsAndNonDigits(inputString) {
        const match = inputString.match(/(\d+)(\D+)/);
        if (match) {
            const [, digits, nonDigits] = match;
            return [digits, nonDigits];
        } else {
            // If there are no non-digit characters, return the input string and an empty string
            return [inputString, ''];
        }
    }
    const [digits, nonDigits] = splitDigitsAndNonDigits(prop.count);
    return (<div className={styles.recordItem}>
        <img src={prop.image} alt={''}/>
        <div>
            <h3>
                <VisibilitySensor
                    partialVisibility
                >
                    {({ isVisible }) => (
                        <CountUp
                            end={digits}
                            duration={5}
                            // @ts-ignore
                            start={
                                isVisible
                                    ? 0
                                    : null
                            }
                        />
                    )}
                </VisibilitySensor><span className={`${styles[`type${type}`]}`}>{nonDigits}</span>
            </h3>
            <div className={styles.title}>{prop.title}</div>
        </div>
    </div>);

};
interface RecordListPorp{
    recordList: RecordItemProp[];
    size?: number;
    type?: number;
}

export default function ({recordList,size = 6, type= 1}: RecordListPorp) {
    return (

        <div className={styles.records} data-aos="fade-left">
            <Row className={styles.recordRow}>
                {
                    recordList.map((item, index) =>
                        (<Col xs={size}>
                            <RecordItem image={item.image} title={item.title} count={item.count} type={type} key={index}/>

                        </Col>)
                    )
                }
            </Row>
        </div>

    );
}
