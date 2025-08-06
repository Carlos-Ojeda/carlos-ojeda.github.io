import React from 'react';
import { Row, Col } from 'antd';
import { Section } from '../shared';
import PersonalIntroduction from './components/PersonalIntroduction';
import EmploymentSection from './components/EmploymentSection';
import EducationSection from './components/EducationSection';
import { DESIGN_SYSTEM } from '../../config/designSystem';

const AboutMe = () => {
    return (
        <Section 
            id="about-me"
            titleKey="aboutMe.title"
            subtitleKey="aboutMe.subtitle"
            className="about-me-section"
            style={{
                padding: DESIGN_SYSTEM.components.sections.padding,
            }}
        >
            <Row gutter={[8, 0]} className="about-content">
                {/* Left Column - Personal Introduction */}
                <Col xs={24} md={24} lg={10} xl={10}>
                    <PersonalIntroduction />
                </Col>

                {/* Right Column - Employment & Education */}
                <Col xs={24} md={24} lg={14} xl={14}>
                    <EmploymentSection />
                    <EducationSection />
                </Col>
            </Row>
        </Section>
    );
};

export default AboutMe; 