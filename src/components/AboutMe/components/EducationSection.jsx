import React, { useMemo, useCallback, useState } from 'react';
import ChatBubble from './ChatBubble';
import { DataCarousel } from '../../shared';
import { useTranslations } from '../../../hooks/useTranslations';
import { getEducationData, getCertificationsData } from '../../../data/employmentData';
import { DESIGN_SYSTEM } from '../../../config/designSystem';

const EducationSection = () => {
    const { t } = useTranslations();
    const [isCollapsed, setIsCollapsed] = useState(true);
    
    const messageTime = useMemo(() => 
        new Date().toLocaleTimeString([], { 
            hour: '2-digit', 
            minute: '2-digit' 
        }), 
        []
    );
    
    const educationData = useMemo(() => getEducationData(t), [t]);
    const certificationsData = useMemo(() => getCertificationsData(t), [t]);

    const handleTitleClick = useCallback(() => {
        setIsCollapsed(prev => !prev);
    }, []);

    const renderEducationSlide = (edu) => (
        <div className="employment-slide">
            <div className="employment-card">
                <div className="employment-header-row">
                    <div className="company-header-mobile">
                        <div className="company-logo" style={{ width: 56, height: 56, background: '#f0f0f0', borderRadius: 8 }}>
                            {edu.logo && <img src={edu.logo} alt={edu.company} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 8 }} />}
                        </div>
                        <div className="company-info">
                            <div className="program-info">
                                <h3 className="program-title">{edu.positions[0].title}</h3>
                                <span className="institution-text">{edu.company}</span>
                            </div>
                            <span className="date-text">{edu.date}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <ChatBubble 
            showAvatar={false}
            className={`right-card ${isCollapsed ? 'collapsed' : ''}`}
            isCollapsed={isCollapsed}
        >
            <div 
                className={`chat-title left-align clickable-title ${isCollapsed ? 'collapsed' : ''}`}
                onClick={handleTitleClick}
                style={{ 
                    cursor: 'pointer',
                    transition: DESIGN_SYSTEM.transitions.normal,
                }}
            >
                {t('aboutMe.education.title')}
            </div>
            <div className="chat-text">
                {t('aboutMe.education.description')}
            </div>
            <div className="chat-gallery">
                {/* First Education Carousel */}
                <DataCarousel 
                    data={educationData}
                    renderItem={renderEducationSlide}
                    className="employment-carousel"
                />
                
                {/* Second Certifications Carousel */}
                <DataCarousel 
                    data={certificationsData}
                    renderItem={renderEducationSlide}
                    className="employment-carousel"
                />
            </div>
            <div className="chat-meta">
                Carlos • {messageTime}
            </div>
        </ChatBubble>
    );
};

export default EducationSection;
