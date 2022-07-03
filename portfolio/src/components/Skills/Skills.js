import React from 'react';
import { Col, Row, Divider, Tag } from 'antd';

function Skills() {
    return (
        <div className='skills' id='skills'>
            <Divider orientation="left">Technical Skills</Divider>
            <Row  className='content' gutter={[16, 24]}>
                <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 10 }}>
                    <Divider orientation="left">Languages</Divider>
                    <div className='content'>
                        <Tag color="magenta">C++</Tag>
                        <Tag color="red">JS</Tag>
                        <Tag color="volcano">Python</Tag>
                        <Tag color="orange">Kotlin</Tag>
                        <Tag color="gold">Java</Tag>
                        <Tag color="lime">SQL</Tag>
                        <Tag color="green">C#</Tag>
                    </div>
                </Col>
                
                <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 10, offset: 2 }}>
                    <Divider orientation="left">Technologies</Divider>
                    <div className='content'>
                        <Tag color="magenta">React</Tag>
                        <Tag color="red">Carbon Design System</Tag>
                        <Tag color="volcano">Ant Design System</Tag>
                        <Tag color="orange">HTML</Tag>
                        <Tag color="gold">CSS</Tag>
                        <Tag color="lime">Figma</Tag>
                        <Tag color="green">Node.JS</Tag>
                        <Tag color="cyan">Unity</Tag>
                        <Tag color="blue">MySQL</Tag>
                        <Tag color="geekblue">PostgreSQL</Tag>
                        <Tag color="purple">MongoDB</Tag>
                        <Tag color="magenta">Firebase</Tag>
                        <Tag color="red">IBM Cloud DB2</Tag>
                        <Tag color="volcano">Gihub Actions</Tag>
                        <Tag color="orange">Docker</Tag>
                        <Tag color="gold">IBM Cloud Foundry</Tag>
                        <Tag color="lime">Postman</Tag>
                        <Tag color="green">Cypress</Tag>
                    </div>
                </Col>
            </Row>
        </div>
    );
  }
  
  export default Skills;
  