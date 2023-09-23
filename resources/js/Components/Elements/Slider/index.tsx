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
    const SliderNext = ({ currentSlide, slideCount, ...props }) => {
        return (<ArrowNext {...props} className={styles.sliderNext}/>);
    };
    const SliderPrevious = ({ currentSlide, slideCount, ...props }) => {
        return (<ArrowNext {...props} className={styles.sliderPrevious}/>);
    };
    // @ts-ignore
    settings['prevArrow'] = <SliderPrevious/>;
    // @ts-ignore
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
