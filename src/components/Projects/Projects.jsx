import React from 'react';
import { Row, Col, Select } from 'antd';
import { useTranslations } from '../../hooks/useTranslations';
import { Section } from '../shared';
import ProjectCard from './components/ProjectCard';
import { useProjectFilter } from './hooks/useProjectFilter';

const Projects = () => {
    const { t } = useTranslations();
    const { selectedCategory, categories, filteredProjects, handleCategoryChange } = useProjectFilter();

    const categoryFilter = (
        <div className="category-filter">
            <Select
                value={selectedCategory}
                onChange={handleCategoryChange}
                options={categories}
                style={{ width: 200 }}
                placeholder={t('projects.filterPlaceholder')}
            />
        </div>
    );

    return (
        <Section 
            id="projects"
            titleKey="projects.title"
            subtitleKey="projects.subtitle"
            className="projects-section"
            extraHeaderContent={categoryFilter}
        >
            <Row gutter={[24, 24]} style={{ marginTop: '48px' }}>
                {filteredProjects.map((project, index) => (
                    <Col key={index} xs={24} sm={12} md={12} lg={8} xl={6}>
                        <ProjectCard {...project} />
                    </Col>
                ))}
            </Row>
        </Section>
    );
};

export default Projects;
  