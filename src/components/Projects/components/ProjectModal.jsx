import React from 'react';
import { Modal, Image, Typography } from 'antd';
import { useTranslations } from '../../../hooks/useTranslations';

const { Title, Text, Paragraph } = Typography;

const ProjectModal = ({ 
    visible, 
    onCancel, 
    title, 
    description, 
    detailedDescription, 
    image1, 
    alt1, 
    image2, 
    alt2, 
    image3, 
    alt3, 
    tags 
}) => {
    const { t } = useTranslations();

    return (
        <Modal
            title={title}
            open={visible}
            onCancel={onCancel}
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
    );
};

export default ProjectModal;
