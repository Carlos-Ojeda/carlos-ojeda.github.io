import React, { useMemo } from 'react';
import Collage from '../Collage';
import ChatBubble from './ChatBubble';
import { useTranslations } from '../../../hooks/useTranslations';

const PersonalIntroduction = () => {
    const { t, getGreeting } = useTranslations();
    
    const messageTime = useMemo(() => 
        new Date().toLocaleTimeString([], { 
            hour: '2-digit', 
            minute: '2-digit' 
        }), 
        []
    );
    
    const greeting = useMemo(() => getGreeting(), [getGreeting]);

    return (
        <ChatBubble 
            avatarSrc="https://avatars.githubusercontent.com/u/71744365?v=4"
            className="left-card"
        >
            <div className="chat-title left-align">
                {greeting}! 👋🏼
            </div>
            <div className="chat-text">
                {t('aboutMe.personalMessage.title')}
            </div>
            <div className="chat-text">
                {t('aboutMe.personalMessage.subtitle')}
            </div>
            <div className="chat-gallery">
                <Collage />
            </div>
            <div className="chat-meta">
                Carlos • {messageTime}
            </div>
        </ChatBubble>
    );
};

export default PersonalIntroduction;
