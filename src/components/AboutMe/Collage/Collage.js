import React, { useMemo } from 'react';
import { Carousel } from 'antd';
import { useTranslations } from '../../../hooks/useTranslations';

const CarouselImage = React.memo(({ alt, src }) => {
    return (
        <div className='carousel-image-container'>
            <img className='carousel-image' alt={alt} src={src} />
        </div>
    );
});

CarouselImage.displayName = 'CarouselImage';

function Collage() {
    const { t } = useTranslations();
    
    const images = useMemo(() => ([
        { alt: t('aboutMe.images.observatory'), src: "/assets/aboutMe/IMG_2139.JPG" },
        { alt: t('aboutMe.images.sunsetBeach'), src: "/assets/aboutMe/IMG_0540.jpeg" },
        { alt: t('aboutMe.images.forest'), src: "/assets/aboutMe/IMG_2091.JPG" },
        { alt: t('aboutMe.images.sunsetPole'), src: "/assets/aboutMe/c2957695-78b8-4735-8282-f5d4aefc4581.jpg" },
        { alt: t('aboutMe.images.vineyards'), src: "/assets/aboutMe/IMG_7480.JPG" },
        { alt: t('aboutMe.images.snowSmile'), src: "/assets/aboutMe/IMG_6628.PNG" },
        { alt: t('aboutMe.images.beachJump'), src: "/assets/aboutMe/eb7a35f4-1d26-4945-9d96-4f4fee371bfd.jpg" },
        { alt: t('aboutMe.images.hikingForest'), src: "/assets/aboutMe/IMG_1916.JPG" },
        { alt: t('aboutMe.images.coastHiking'), src: "/assets/aboutMe/IMG_2507.JPG" },
        { alt: t('aboutMe.images.bufadora'), src: "/assets/aboutMe/IMG_6796.JPG" },
        { alt: t('aboutMe.images.palmTrees'), src: "/assets/aboutMe/IMG_0543.jpeg" }
    ]), [t]);

    return (
        <>
            <Carousel autoplay dots={false} autoplaySpeed={2000} effect="fade" speed={800}>
                {images.map((item, index) => (
                    <CarouselImage key={index} alt={item.alt} src={item.src} />
                ))}
            </Carousel>
        </>
    );
}

export default Collage;