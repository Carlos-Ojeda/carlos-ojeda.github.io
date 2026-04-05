import React from 'react';
import { Card, Typography, Tag } from 'antd';
import { useTranslations } from '../../../hooks/useTranslations';

const { Title, Text, Paragraph } = Typography;

const ProjectCardPreview = ({ 
    title, 
    description, 
    image1, 
    alt1, 
    tags, 
    category, 
    onClick 
}) => {
    const { t } = useTranslations();

    // Extraer las primeras 4 skills de los tags para mostrar en la tarjeta
    const extractSkillsFromTags = (tagsElement) => {
        if (!tagsElement || !tagsElement.props || !tagsElement.props.children) {
            return [];
        }
        
        const children = Array.isArray(tagsElement.props.children) 
            ? tagsElement.props.children 
            : [tagsElement.props.children];
        
        return children
            .filter(child => child && child.type === Tag)
            .slice(0, 4)
            .map((tag, index) => React.cloneElement(tag, { 
                key: index,
                style: { 
                    fontSize: '10px', 
                    padding: '2px 6px', 
                    margin: '0 4px 4px 0',
                    cursor: 'pointer'
                }
            }));
    };

    const previewSkills = extractSkillsFromTags(tags);

    return (
        <Card
            hoverable
            className="project-card unified-card"
            style={{
                overflow: 'hidden',
                cursor: 'pointer'
            }}
            onClick={onClick}
            cover={
                <div className="project-cover">
                    <div className="image-preview-container">
                        <img
                            className="project-main-image"
                            alt={alt1}
                            src={image1}
                        />
                    </div>
                    
                    <div className="project-category">
                        <Tag color="blue" style={{ margin: 0, borderRadius: '4px' }}>
                            {category}
                        </Tag>
                    </div>
                </div>
            }
        >
            <div className="project-content">
                <Title level={4} className="card-title left-align">
                    {title}
                </Title>
                <Paragraph className="project-description">
                    {description}
                </Paragraph>
                <div className="project-skills-preview">
                    {previewSkills}
                    {previewSkills.length > 0 && React.Children.count(tags.props.children) - previewSkills.length > 0 && (
                        <Text className="skills-hint" style={{ 
                            fontSize: '10px', 
                            color: 'var(--text-muted)', 
                            fontStyle: 'italic',
                            marginLeft: '4px'
                        }}>
                            {t('projects.moreSkills', { count: React.Children.count(tags.props.children) - previewSkills.length })}
                        </Text>
                    )}
                </div>
            </div>
        </Card>
    );
};

export default ProjectCardPreview;
