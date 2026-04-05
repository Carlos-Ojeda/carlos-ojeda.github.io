import React from 'react';
import { Card, Typography } from 'antd';

const { Title, Paragraph } = Typography;

const ContentCard = ({ 
    title, 
    subtitle, 
    children, 
    className = '', 
    hoverable = true,
    cover,
    onClick,
    style = {}
}) => {
    return (
        <Card
            hoverable={hoverable}
            className={`content-card unified-card ${className}`}
            cover={cover}
            onClick={onClick}
            style={style}
        >
            <div className="card-content">
                {title && (
                    <Title level={3} className="card-title">
                        {title}
                    </Title>
                )}
                {subtitle && (
                    <Paragraph className="card-description">
                        {subtitle}
                    </Paragraph>
                )}
                {children}
            </div>
        </Card>
    );
};

export default ContentCard;
