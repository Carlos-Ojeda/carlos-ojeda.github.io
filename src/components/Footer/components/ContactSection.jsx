import React, { useState } from 'react';
import { message } from 'antd';
import {
    MailOutlined,
    LinkedinOutlined,
    GithubOutlined,
    CopyOutlined,
    CheckOutlined
} from '@ant-design/icons';
import { contactConfig } from '../../../config/contact';
import { useTranslations } from '../../../hooks/useTranslations';
import FooterSection from './FooterSection';

const ContactSection = () => {
    const { t } = useTranslations();
    const [emailCopied, setEmailCopied] = useState(false);

    const handleCopyEmail = async () => {
        try {
            await navigator.clipboard.writeText(contactConfig.email);
            setEmailCopied(true);
            setTimeout(() => {
                setEmailCopied(false);
            }, 500);
        } catch (err) {
            message.error('Failed to copy email');
        }
    };

    return (
        <FooterSection title={t('footer.contact')}>
            <div className="footer-links">
                <div 
                    className="footer-email-item"
                    onClick={handleCopyEmail}
                >
                    <MailOutlined /> {contactConfig.email}
                    {emailCopied ? (
                        <CheckOutlined className="copy-icon copied" />
                    ) : (
                        <CopyOutlined className="copy-icon" />
                    )}
                </div>
                <a 
                    href={contactConfig.social.linkedin.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social-link"
                >
                    <LinkedinOutlined /> LinkedIn
                </a>
                <a 
                    href={contactConfig.social.github.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social-link"
                >
                    <GithubOutlined /> GitHub
                </a>
            </div>
        </FooterSection>
    );
};

export default ContactSection;
