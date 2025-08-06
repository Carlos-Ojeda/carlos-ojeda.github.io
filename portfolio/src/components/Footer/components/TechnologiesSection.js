import React, { useMemo } from 'react';
import { MailFilled, GithubFilled } from '@ant-design/icons';
import { SiReact } from 'react-icons/si';
import { AiOutlineAntDesign } from 'react-icons/ai';
import { useTranslations } from '../../../hooks/useTranslations';
import FooterSection from './FooterSection';

const TechnologiesSection = () => {
    const { t } = useTranslations();

    const technologies = useMemo(() => [
        {
            name: "React",
            icon: <SiReact className='anticon' />
        },
        {
            name: "Ant Design",
            icon: <AiOutlineAntDesign className='anticon' />
        },
        {
            name: "EmailJS",
            icon: <MailFilled />
        },
        {
            name: "GitHub Pages",
            icon: <GithubFilled />
        }
    ], []);

    return (
        <FooterSection title={t('footer.builtWith')}>
            <div className="footer-tech-list">
                {technologies.map((tech, index) => (
                    <div key={index} className="footer-tech-item">
                        {tech.icon} {tech.name}
                    </div>
                ))}
            </div>
        </FooterSection>
    );
};

export default TechnologiesSection;
