import {Button, Col, Container, Nav, Navbar, NavDropdown, Row} from "react-bootstrap";
// @ts-ignore
import styles from "./styles.module.scss";
import * as React from "react";
// @ts-ignore
import arrowRightSvg from "/public/assets/svg/arrow-right.svg";

export interface RecordItemProp {
    image: string;
    title: string;
    count: string;
}
export const RecordItem = (prop: RecordItemProp) => {
    return (<div className={styles.recordItem}>
        <img src={prop.image} alt={''}/>
        <div>
            <h3>{prop.count}</h3>
            <div className={styles.title}>{prop.title}</div>
        </div>
    </div>);
};
interface RecordListPorp{
    recordList: RecordItemProp[];
}

export default function ({recordList}: RecordListPorp) {
    return (

        <div className={styles.records}>
            <Row className={styles.recordRow}>
                {
                    recordList.map((item, index) =>
                        (<Col xs={6}>
                            <RecordItem image={item.image} title={item.title} count={item.count} key={index}/>
                        </Col>)
                    )
                }
            </Row>
        </div>

    );
}
