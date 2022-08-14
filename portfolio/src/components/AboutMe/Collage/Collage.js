import React from 'react';
import { Row, Col, Carousel } from 'antd';

const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#000000',
};

const CarouselImage = (alt, src) => {
    return (
        <div className='carousel-image-container'>
            <img className='carousel-image' alt={alt} src={src} />
        </div>
    )
};

function Collage() {
    return (
        <>
            <Row style={contentStyle} justify="space-around" align="middle">
                <Col span={12}>
                    <Carousel className='carousel' autoplay dots={false}>
                        {CarouselImage("San Pedro Martir National Astronomical Observatory Photo", "/assets/aboutMe/IMG_2139.JPG")}
                        {CarouselImage("Sunset on the beach of the Pacific Ocean", "/assets/aboutMe/IMG_0540.jpeg")}
                        {CarouselImage("Sunset on the beach, Cortez Sea", "/assets/aboutMe/IMG_0593.JPG")}
                        {CarouselImage("Forest Photo", "/assets/aboutMe/IMG_2091.JPG")}
                    </Carousel>
                </Col>
                <Col span={12}>
                    <Carousel className='carousel' autoplay dots={false}>
                        {CarouselImage("Sunset on top of a pole", "/assets/aboutMe/c2957695-78b8-4735-8282-f5d4aefc4581.jpg")}
                        {CarouselImage("River whit big stones photo", "/assets/aboutMe/IMG_2967.JPG")}
                        {CarouselImage("Vineyards photo", "/assets/aboutMe/IMG_7480.JPG")}
                        {CarouselImage("Smiling surrounded by snow", "/assets/aboutMe/IMG_6628.PNG")}
                    </Carousel>
                </Col>
            </Row>
            <Row style={contentStyle} justify="space-around" align="middle">
                <Col span={12}>
                    <Carousel className='carousel' autoplay dots={false}>
                        {CarouselImage("Jumping on the beach, in a sunset", "/assets/aboutMe/eb7a35f4-1d26-4945-9d96-4f4fee371bfd.jpg")}
                        {CarouselImage("Showing the forest, at a hiking activity", "/assets/aboutMe/IMG_1916.JPG")}
                        {CarouselImage("River picture", "/assets/aboutMe/IMG_5931.JPG")}
                    </Carousel>
                </Col>
                <Col span={12}>
                    <Carousel className='carousel' autoplay dots={false}>
                        {CarouselImage("Hiking on the Baja California coast", "/assets/aboutMe/IMG_2507.JPG")}
                        {CarouselImage("Visiting La Bufadora, tourist space", "/assets/aboutMe/IMG_6796.JPG")}
                        {CarouselImage("Picture of palm trees", "/assets/aboutMe/IMG_0543.jpeg")}
                    </Carousel>
                </Col>
            </Row>
        </>
    );
}
  
export default Collage;