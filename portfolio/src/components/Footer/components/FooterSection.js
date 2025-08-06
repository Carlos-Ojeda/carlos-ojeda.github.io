import React from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

const FooterSection = ({ title, children }) => {
    return (
        <div className="footer-section">
            <Title level={4} className="footer-title">
                {title}
            </Title>
            {children}
        </div>
    );
};

export default FooterSection;
