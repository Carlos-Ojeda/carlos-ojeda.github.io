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
                        {CarouselImage("San Pedro Martir National Astronomical Observatory Photo", "https://drive.google.com/uc?id=1lxtO6-d2tPsg2bX9dw9Qw87E4eLbodOy")}
                        {CarouselImage("Sunset on the beach of the Pacific Ocean", "https://drive.google.com/uc?id=1avVDGi1ha6J8WGk2G9JHiqZakX71uqK1")}
                        {CarouselImage("Sunset on the beach, Cortez Sea", "https://drive.google.com/uc?id=1AH2SmQQHWdtLawf83rtwwNHUwlG4jOxJ")}
                        {CarouselImage("Forest Photo", "https://drive.google.com/uc?id=1Da3-eCW4ANi8FbklCgkioVDKWoUyhbSW")}
                    </Carousel>
                </Col>
                <Col span={12}>
                    <Carousel className='carousel' autoplay dots={false}>
                        {CarouselImage("Sunset on top of a pole", "https://drive.google.com/uc?id=1GvkOgBrWNCHhU94KVUtZNz42gQxofww8")}
                        {CarouselImage("River whit big stones photo", "https://drive.google.com/uc?id=1At9x_UDlbQ5RjhCY4_A4w8eHSYvJv7W-")}
                        {CarouselImage("Vineyards photo", "https://drive.google.com/uc?id=1J7Goae51XrekjvstfvK3yMUKF6YyS-85")}
                        {CarouselImage("Smiling surrounded by snow", "https://drive.google.com/uc?id=1eY4CZVYzUeAM8vgaVKvEiYRWcAHHmAQ1")}
                    </Carousel>
                </Col>
            </Row>
            <Row style={contentStyle} justify="space-around" align="middle">
                <Col span={12}>
                    <Carousel className='carousel' autoplay dots={false}>
                        {CarouselImage("Jumping on the beach, in a sunset", "https://drive.google.com/uc?id=1kNKrM_I8KYzcyCDXfnuKq8Bb3MvF2DOJ")}
                        {CarouselImage("Showing the forest, at a hiking activity", "https://drive.google.com/uc?id=15ZJJyKTnbZTILnOpWSkpLNCyx1CXVRQz")}
                        {CarouselImage("River picture", "https://drive.google.com/uc?id=1WG5Czh7-DnQUF18BaAWvprNDGp_trGOM")}
                    </Carousel>
                </Col>
                <Col span={12}>
                    <Carousel className='carousel' autoplay dots={false}>
                        {CarouselImage("Hiking on the Baja California coast", "https://drive.google.com/uc?id=1C-UNh3e_Jy4KtQcla7pUOqZhySRYCswb")}
                        {CarouselImage("Visiting La Bufadora, tourist space", "https://drive.google.com/uc?id=1_5kyGfm6KCM-ZKYLT0gj1MB0uI1Ae4SL")}
                        {CarouselImage("Picture of palm trees", "https://drive.google.com/uc?id=14Km3IxzZzRmiVnmOT6ETjyJP9mcQen-K")}
                    </Carousel>
                </Col>
            </Row>
        </>
    );
}
  
export default Collage;