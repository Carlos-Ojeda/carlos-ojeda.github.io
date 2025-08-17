import React from 'react';
import { Avatar } from 'antd';

const ChatBubble = ({ 
    avatarSrc, 
    avatarSize = 48, 
    showAvatar = true, 
    children, 
    className = '',
    isCollapsed = false 
}) => {
    return (
        <div className={`personal-card ${className}`}>
            <div className="chat-row">
                {showAvatar ? (
                    <Avatar 
                        className="chat-avatar" 
                        size={avatarSize} 
                        shape="circle" 
                        src={avatarSrc} 
                    />
                ) : (
                    <div className="avatar-placeholder"></div>
                )}
                <div className={`chat-bubble received ${isCollapsed ? 'collapsed' : ''}`}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default ChatBubble;
