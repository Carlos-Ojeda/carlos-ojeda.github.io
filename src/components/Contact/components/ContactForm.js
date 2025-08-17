import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Row, Col, message } from 'antd';
import { SendOutlined } from '@ant-design/icons';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../../../config/emailjs';
import { useTranslations } from '../../../hooks/useTranslations';
import { ContentCard } from '../../shared';

const { TextArea } = Input;

const ContactForm = () => {
    const { t } = useTranslations();
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);

    // EmailJS configuration
    useEffect(() => {
        emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
    }, []);

    const onFinish = async (values) => {
        setLoading(true);
        try {
            // EmailJS template parameters
            const templateParams = {
                from_name: values.name,
                from_email: values.email,
                subject: values.subject,
                message: values.message,
                to_name: "Carlos Ojeda"
            };

            // Send email using EmailJS
            const result = await emailjs.send(
                EMAILJS_CONFIG.SERVICE_ID,
                EMAILJS_CONFIG.TEMPLATE_ID,
                templateParams
            );

            if (result.status === 200) {
                message.success(t('contact.form.success'));
                form.resetFields();
            } else {
                throw new Error('Error sending message');
            }
        } catch (error) {
            message.error(t('contact.form.error'));
        } finally {
            setLoading(false);
        }
    };

    return (
        <ContentCard
            title={t('contact.form.title')}
            subtitle={t('contact.form.description')}
            className="contact-form-card"
        >
            <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                className="contact-form"
            >
                <Row gutter={16}>
                    <Col xs={24} sm={12}>
                        <Form.Item
                            name="name"
                            label={t('contact.form.name')}
                            rules={[{ required: true, message: 'Please enter your name' }]}
                        >
                            <Input 
                                placeholder={t('contact.form.namePlaceholder')}
                                size="large"
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={12}>
                        <Form.Item
                            name="email"
                            label={t('contact.form.email')}
                            rules={[
                                { required: true, message: 'Please enter your email' },
                                { type: 'email', message: 'Please enter a valid email' }
                            ]}
                        >
                            <Input 
                                placeholder={t('contact.form.emailPlaceholder')}
                                size="large"
                            />
                        </Form.Item>
                    </Col>
                </Row>
                
                <Form.Item
                    name="subject"
                    label={t('contact.form.subject')}
                    rules={[{ required: true, message: 'Please enter a subject' }]}
                >
                    <Input 
                        placeholder={t('contact.form.subjectPlaceholder')}
                        size="large"
                    />
                </Form.Item>
                
                <Form.Item
                    name="message"
                    label={t('contact.form.message')}
                    rules={[{ required: true, message: 'Please enter your message' }]}
                >
                    <TextArea 
                        placeholder={t('contact.form.messagePlaceholder')}
                        rows={6}
                        size="large"
                    />
                </Form.Item>
                
                <Form.Item>
                    <Button 
                        type="primary" 
                        htmlType="submit" 
                        size="large"
                        loading={loading}
                        icon={<SendOutlined />}
                        className="contact-send-button"
                    >
                        {loading ? t('contact.form.sending') : t('contact.form.send')}
                    </Button>
                </Form.Item>
            </Form>
        </ContentCard>
    );
};

export default ContactForm;
