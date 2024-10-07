import {Button, Col, Container, Nav, Navbar, NavDropdown, Row} from "react-bootstrap";
// @ts-ignore
import styles from "./styles.module.scss";
import * as React from "react";
// @ts-ignore
import arrowRightSvg from "/public/assets/svg/arrow-right.svg";

export interface SupportItemProp {
    image: string;
    title: string;
    description: string;
    buttonText: string;
    buttonBgDark?: boolean;
    buttonAction? : () => void
}
export const SupportItem = (prop: SupportItemProp) => {
    return (
        <div>
            <img src={prop.image} alt={' Cosgrove Africa - Support'}/>
            <h5>{prop.title}</h5>
            <p className={'textDark'}>{prop.description}</p>
            <button onClick={prop.buttonAction}
                    className={`button ${(prop.buttonBgDark == true)?styles.dark: styles.yellow}`}>{prop.buttonText}</button>
        </div>
    );
};

interface SupportListProp {
    supportList: SupportItemProp[]
}

export default function ({supportList}: SupportListProp) {
    return (

        <div className={styles.contact} data-aos="fade-left">
            <Row>
                {
                    supportList.map((item, index) =>
                        (
                            <Col xs={6}>
                                <SupportItem image={item.image} title={item.title} description={item.description}
                                             buttonText={item.buttonText} buttonBgDark={item.buttonBgDark}
                                             buttonAction={item.buttonAction} key={index}/>
                            </Col>
                        )
                    )
                }
            </Row>

        </div>

    );
}
