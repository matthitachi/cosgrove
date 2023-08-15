import * as React from "react";

// @ts-ignore
import styles from "./styles.module.scss";
// @ts-ignore
import {ReactComponent as ArrowNext} from "/public/assets/svg/next.svg";
// @ts-ignore
import {ReactComponent as ArrowPrevious} from "/public/assets/svg/prev.svg";
import Slider from "react-slick";
import {useState} from "react";

interface sliderProps {
    settings: object;
    childrenItems: React.ReactNode[]
}

export default function ({settings, childrenItems}:sliderProps) {
    const SliderNext = (props) => {
        return (<ArrowNext {...props} className={styles.sliderNext}/>);
    };
    const SliderPrevious = (props) => {
        return (<ArrowPrevious {...props} className={styles.sliderPrevious}/>);
    };
    settings['prevArrow'] = <SliderPrevious/>;
    settings['nextArrow'] = <SliderNext/>;

    return (

        <Slider {...settings}  className={styles.sliderCtx}>
        {
            childrenItems.map((item, index) =>
                item
            )
        }
    </Slider>)
}
