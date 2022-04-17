import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../banner/banner 1.webp'
import banner2 from '../../../banner/banner 2.webp'
import banner3 from '../../../banner/banner 3.webp'

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (

        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item >
                <img
                    className="d-block w-100" style={{ height: '530px' }}
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p> Welcome to Physical care</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item >
                <img
                    className="d-block w-100 " style={{ height: '530px' }}
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Best in Service</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item >
                <img
                    className="d-block w-100" style={{ height: '530px' }}
                    src={banner3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Always care for your health
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>


    );
};

export default Banner;