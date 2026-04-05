import React, { useCallback } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { contactConfig } from '../../../config/contact';

// Social media configuration
const SOCIAL_LINKS = [
    {
        icon: FaEnvelope,
        url: `mailto:${contactConfig.email}`,
        label: 'Email',
        className: 'email-button'
    },
    {
        icon: FaGithub,
        url: contactConfig.social.github.url,
        label: 'GitHub',
        className: 'github-button'
    },
    {
        icon: FaLinkedin,
        url: contactConfig.social.linkedin.url,
        label: 'LinkedIn',
        className: 'linkedin-button'
    }
];

const SocialButtons = () => {
    const handleClick = useCallback((url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    }, []);

    return (
        <div className="social-buttons">
            {SOCIAL_LINKS.map((social) => {
                const IconComponent = social.icon;
                return (
                    <button
                        key={social.label}
                        className={`social-button ${social.className}`}
                        onClick={() => handleClick(social.url)}
                        aria-label={social.label}
                        title={social.label}
                    >
                        <IconComponent />
                    </button>
                );
            })}
        </div>
    );
};

export default SocialButtons;
