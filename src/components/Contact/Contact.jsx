import React from 'react';
import { Row, Col } from 'antd';
import { Section } from '../shared';
import ContactForm from './components/ContactForm';
import ContactInfo from './components/ContactInfo';

const Contact = () => {
    return (
        <Section 
            id="contact"
            titleKey="contact.title"
            subtitleKey="contact.subtitle"
            className="contact-section"
        >
            <Row gutter={[32, 32]} style={{ marginTop: '48px' }}>
                {/* Contact Form */}
                <Col xs={24} lg={14}>
                    <ContactForm />
                </Col>

                {/* Contact Information */}
                <Col xs={24} lg={10}>
                    <ContactInfo />
                </Col>
            </Row>
        </Section>
    );
};

export default Contact;
