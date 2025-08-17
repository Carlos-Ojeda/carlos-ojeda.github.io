import React from 'react';
import { Typography } from 'antd';
import { 
    MailOutlined, 
    LinkedinOutlined, 
    GithubOutlined
} from '@ant-design/icons';
import { contactConfig } from '../../../config/contact';
import { ContentCard } from '../../shared';

const { Text } = Typography;

const ContactInfo = () => {
    const contactInfo = [
        {
            icon: <MailOutlined />,
            title: "Email",
            value: contactConfig.email,
            link: `mailto:${contactConfig.email}`,
            color: "#1890ff"
        },
        {
            icon: <LinkedinOutlined />,
            title: "LinkedIn",
            value: contactConfig.social.linkedin.display,
            link: contactConfig.social.linkedin.url,
            color: "#0077b5"
        },
        {
            icon: <GithubOutlined />,
            title: "GitHub",
            value: contactConfig.social.github.display,
            link: contactConfig.social.github.url,
            color: "#333"
        }
    ];

    const handleContactClick = (contact) => {
        if (contact.link && contact.link !== '#') {
            window.open(contact.link, '_blank');
        }
    };

    return (
        <ContentCard
            title="Contact Information"
            subtitle="Get in touch with me through any of these channels"
            className="contact-info-card"
        >
            <div className="contact-info-content">
                <div className="contact-info-list">
                    {contactInfo.map((contact, index) => (
                        <div 
                            key={index} 
                            className="contact-info-item"
                            onClick={() => handleContactClick(contact)}
                            style={{ cursor: contact.link !== '#' ? 'pointer' : 'default' }}
                        >
                            <div 
                                className="contact-icon"
                                style={{ backgroundColor: contact.color }}
                            >
                                {contact.icon}
                            </div>
                            <div className="contact-details">
                                <Text strong className="contact-info-title">
                                    {contact.title}
                                </Text>
                                <Text className="contact-info-text">
                                    {contact.value}
                                </Text>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </ContentCard>
    );
};

export default ContactInfo;
