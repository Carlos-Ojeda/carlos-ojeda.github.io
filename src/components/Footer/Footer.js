import React from 'react';
import { Col, Row, Divider } from 'antd';
import OpenSourceSection from './components/OpenSourceSection';
import TechnologiesSection from './components/TechnologiesSection';
import ContactSection from './components/ContactSection';
import CopyrightSection from './components/CopyrightSection';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                {/* Main Footer Section */}
                <Row gutter={[8, 32]} className="footer-main" justify="space-between">
                    {/* Open Source */}
                    <Col xs={12} sm={12} md={6} lg={6}>
                        <OpenSourceSection />
                    </Col>

                    {/* Technologies */}
                    <Col xs={12} sm={12} md={6} lg={6}>
                        <TechnologiesSection />
                    </Col>

                    {/* Contact Info */}
                    <Col xs={12} sm={12} md={6} lg={6}>
                        <ContactSection />
                    </Col>
                </Row>

                {/* Divider */}
                <Divider className="footer-divider" />

                {/* Copyright Section */}
                <Row justify="center" align="middle" className="footer-bottom">
                    <Col xs={24}>
                        <CopyrightSection />
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Footer;
