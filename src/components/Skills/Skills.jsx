import React, { useMemo } from 'react';
import { Col, Row } from 'antd';
import { useTranslations } from '../../hooks/useTranslations';
import { Section, ContentCard, TagList } from '../shared';
import { getSkillsData } from './data/skillsData';

const Skills = () => {
    const { t } = useTranslations();
    
    const skillsData = useMemo(() => getSkillsData(), []);

    // Sort function for skills (confident first, then learning)
    const sortSkills = (a, b) => {
        if (a.confident && !b.confident) return -1;
        if (!a.confident && b.confident) return 1;
        return 0;
    };

    return (
        <Section 
            id="skills"
            titleKey="skills.title"
            subtitleKey="skills.subtitle"
            className="skills-section"
        >
            <Row gutter={[32, 32]} style={{ marginTop: '48px' }}>
                <Col xs={24} lg={12}>
                    <ContentCard 
                        title={t('skills.categories.programmingLanguages')}
                        className="skills-card"
                    >
                        <TagList 
                            items={skillsData.languages}
                            className="skills-tags"
                            sortBy={sortSkills}
                            showIcon={true}
                        />
                    </ContentCard>
                </Col>
                
                <Col xs={24} lg={12}>
                    <ContentCard 
                        title={t('skills.categories.frameworks')}
                        className="skills-card"
                    >
                        <TagList 
                            items={skillsData.technologies}
                            className="skills-tags"
                            sortBy={sortSkills}
                            showIcon={true}
                        />
                    </ContentCard>
                </Col>
            </Row>
        </Section>
    );
};

export default Skills;
  