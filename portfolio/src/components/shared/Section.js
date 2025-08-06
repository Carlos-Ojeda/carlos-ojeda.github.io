import React from 'react';
import { Typography } from 'antd';
import { useTranslations } from '../../hooks/useTranslations';

const { Title, Text } = Typography;

const Section = ({ 
    id, 
    titleKey, 
    subtitleKey, 
    children, 
    className = '', 
    style = {},
    extraHeaderContent
}) => {
    const { t } = useTranslations();

    return (
        <div className={`section ${className}`} id={id} style={style}>
            <div className="section-header">
                <Title level={2} className="section-title">
                    {titleKey ? t(titleKey) : titleKey}
                </Title>
                <Text type="secondary" className="section-subtitle">
                    {subtitleKey ? t(subtitleKey) : subtitleKey}
                </Text>
                {extraHeaderContent}
            </div>
            {children}
        </div>
    );
};

export default Section;
