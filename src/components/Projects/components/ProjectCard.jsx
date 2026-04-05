import React, { useState } from 'react';
import { Card, Image, Typography, Tag, Modal } from 'antd';
import { useTranslations } from '../../../hooks/useTranslations';

const { Title, Text, Paragraph } = Typography;

const ProjectCard = React.memo(({ 
    title, 
    description, 
    detailedDescription, 
    image1, 
    image1Fallback, 
    alt1, 
    image2, 
    image2Fallback, 
    alt2, 
    image3, 
    image3Fallback, 
    alt3, 
    tags, 
    category 
}) => {
    const { t } = useTranslations();
    const [modalVisible, setModalVisible] = useState(false);

    const showModal = () => {
        setModalVisible(true);
    };

    const handleCancel = () => {
        setModalVisible(false);
    };

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
        <>
            <Card
                hoverable
                className="project-card unified-card"
                style={{
                    overflow: 'hidden',
                    cursor: 'pointer'
                }}
                onClick={showModal}
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

            <Modal
                title={title}
                open={modalVisible}
                onCancel={handleCancel}
                footer={null}
                width={800}
                className="project-modal"
            >
                <div className="modal-content">
                    <div className="modal-images">
                        <Image.PreviewGroup>
                            <Image
                                className="modal-main-image"
                                alt={alt1}
                                src={image1}
                                preview={{
                                    mask: <div className="image-preview-mask">
                                        <Text className="preview-text">{t('projects.modal.viewMoreImages')}</Text>
                                    </div>
                                }}
                            />
                            <Image
                                className="modal-hidden-image"
                                alt={alt2}
                                src={image2}
                            />
                            <Image
                                className="modal-hidden-image"
                                alt={alt3}
                                src={image3}
                            />
                        </Image.PreviewGroup>
                    </div>
                    
                    <div className="modal-description">
                        <Title level={4}>{t('projects.modal.projectDescription')}</Title>
                        <Paragraph className="modal-description-text">
                            {detailedDescription || description}
                        </Paragraph>
                    </div>
                    
                    <div className="modal-technologies">
                        <Title level={4}>{t('projects.modal.technologiesUsed')}</Title>
                        <div className="modal-tags">
                            {tags}
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
});

ProjectCard.displayName = 'ProjectCard';

export default ProjectCard;
