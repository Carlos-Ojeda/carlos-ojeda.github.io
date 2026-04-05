import React from 'react';
import { Typography } from 'antd';
import { contactConfig } from '../../../config/contact';
import { useTranslations } from '../../../hooks/useTranslations';

const { Text } = Typography;

const CopyrightSection = () => {
    const { t } = useTranslations();
    const currentYear = new Date().getFullYear();

    return (
        <div className="footer-copyright-section">
            <Text className="footer-copyright">
                {t('footer.copyright', { year: currentYear })}
            </Text>
            <div className="footer-github-link">
                <a
                    href={contactConfig.social.githubRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-license-link"
                >
                    {t('footer.freeToUse')}
                </a>
            </div>
        </div>
    );
};

export default CopyrightSection;
