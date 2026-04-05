import React from 'react';
import {
    GithubOutlined,
    BugOutlined,
    BulbOutlined,
    BranchesOutlined
} from '@ant-design/icons';
import { contactConfig } from '../../../config/contact';
import { useTranslations } from '../../../hooks/useTranslations';
import FooterSection from './FooterSection';

const OpenSourceSection = () => {
    const { t } = useTranslations();

    return (
        <FooterSection title={t('footer.openSource')}>
            <div className="footer-links">
                <a 
                    href={contactConfig.social.githubRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social-link"
                >
                    <GithubOutlined /> {t('footer.repository')}
                </a>
                <a 
                    href={`${contactConfig.social.githubRepo}/issues/new`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social-link"
                >
                    <BugOutlined /> {t('footer.reportIssues')}
                </a>
                <a 
                    href={`${contactConfig.social.githubRepo}/discussions/new`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social-link"
                >
                    <BulbOutlined /> {t('footer.suggestFeatures')}
                </a>
                <a 
                    href={`${contactConfig.social.githubRepo}/fork`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social-link"
                >
                    <BranchesOutlined /> {t('footer.forkProject')}
                </a>
            </div>
        </FooterSection>
    );
};

export default OpenSourceSection;
