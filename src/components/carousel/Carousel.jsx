import React, { useState } from 'react';
import {Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../navbar/NavBar';
import img1 from '../../assets/carousel1.jpg'
import img2 from '../../assets/carousel2.jpg'
import img3 from '../../assets/carousel3.jpg'
import style from './Carousel.module.css'

export default function ControlledCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    };

    return (
        <div className={style.maincarousel}>
        <NavBar className={style.nav}/>
        <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
            <img
            className={style.image}
            src={img1}
            alt="First slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            className={style.image}
            src={img2}
            alt="Second slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
            className={style.image}
            src={img3}
            alt="Third slide"
        />
        </Carousel.Item>
        </Carousel>
        </div>
    );
}


