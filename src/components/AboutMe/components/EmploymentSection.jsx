import React, { useMemo, useCallback, useState } from 'react';
import ChatBubble from './ChatBubble';
import { DataCarousel } from '../../shared';
import { useTranslations } from '../../../hooks/useTranslations';
import { getEmploymentData } from '../../../data/employmentData';
import { DESIGN_SYSTEM } from '../../../config/designSystem';

const EmploymentSection = () => {
    const { t } = useTranslations();
    const [isCollapsed, setIsCollapsed] = useState(false);
    
    const messageTime = useMemo(() => 
        new Date().toLocaleTimeString([], { 
            hour: '2-digit', 
            minute: '2-digit' 
        }), 
        []
    );
    
    const employmentData = useMemo(() => getEmploymentData(t), [t]);

    const handleTitleClick = useCallback(() => {
        setIsCollapsed(prev => !prev);
    }, []);

    const renderEmploymentSlide = (job) => (
        <div className="employment-slide">
            <div className="employment-card">
                <div className="employment-header-row">
                    <div className="company-header-mobile">
                        <div className="company-logo" style={{ width: 56, height: 56, background: '#f0f0f0', borderRadius: 8 }}>
                            {job.logo && <img src={job.logo} alt={job.company} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 8 }} />}
                        </div>
                        <div className="company-info">
                            <h3 className="company-title">{job.company}</h3>
                            <span className="date-text">{job.date}</span>
                        </div>
                    </div>
                </div>

                <div className="positions-section">
                    {job.positions.map((position, posIndex) => (
                        <div key={posIndex} className="position-item">
                            <div className="position-header">
                                <h2 className="position-title">{position.title}</h2>
                                {position.date && <span className="position-date">{position.date}</span>}
                            </div>
                            <ul className="bullet-list">
                                {position.description.map((item, itemIndex) => (
                                    <li key={itemIndex}>{String(item).replace(/^•\s*/, '')}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    return (
        <ChatBubble 
            avatarSrc="https://avatars.githubusercontent.com/u/71744365?v=4"
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
                {t('aboutMe.employment.title')}
            </div>
            <div className="chat-text">
                {t('aboutMe.employment.description')}
            </div>
            <div className="chat-gallery">
                <DataCarousel 
                    data={employmentData}
                    renderItem={renderEmploymentSlide}
                    className="employment-carousel"
                />
            </div>
            <div className="chat-meta">
                Carlos • {messageTime}
            </div>
        </ChatBubble>
    );
};

export default EmploymentSection;
