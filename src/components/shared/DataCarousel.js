import React from 'react';
import { Carousel } from 'antd';
import { ANIMATION_CONFIG } from '../../config/constants';

const DataCarousel = ({ 
    data, 
    renderItem, 
    className = 'data-carousel',
    autoplay = true,
    autoplaySpeed = ANIMATION_CONFIG.carouselSpeed,
    dotPosition = 'top',
    effect = 'fade'
}) => {
    return (
        <div className="carousel-wrapper">
            <Carousel
                autoplay={autoplay}
                autoplaySpeed={autoplaySpeed}
                dotPosition={dotPosition}
                effect={effect}
                className={className}
            >
                {data.map((item, index) => (
                    <div key={index}>
                        {renderItem(item)}
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default DataCarousel;
