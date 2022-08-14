import React from 'react';
import { Col, Row, Divider, Tag } from 'antd';
import { ReactComponent as LoCarbon } from './carbon.svg';
import { 
            SiFlask,
            SiArduino,
            SiCplusplus, 
            SiJavascript, 
            SiPython, 
            SiCsharp, 
            SiCss3, 
            SiHtml5,
            SiReact,
            SiPostgresql,
            SiFirebase,
            SiGithubactions,
            SiDocker,
            SiPostman, 
            SiCypress,
            SiCloudfoundry,
            SiIbm
        } from 'react-icons/si';
import { 
            FaJava, 
            FaNode,
            FaUnity 
        } from "react-icons/fa";
import { TbBrandKotlin } from "react-icons/tb";
import { RiDatabase2Fill } from "react-icons/ri";
import { AiOutlineAntDesign } from "react-icons/ai";
import { CgFigma } from "react-icons/cg";
import { GrMysql } from "react-icons/gr";

function Skills() {
    return (
        <div className='skills' id='skills'>
            <Divider orientation="left">Technical Skills</Divider>
            <Row  className='content' gutter={[16, 24]}>
                <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 10 }}>
                    <Divider orientation="left">Languages</Divider>
                    <div className='content'>
                        <Tag icon={<SiCplusplus className='anticon' />} color="magenta" >C++</Tag>
                        <Tag icon={<SiJavascript className='anticon' />} color="red">JavaScript</Tag>
                        <Tag icon={<SiPython className='anticon' />} color="volcano">Python</Tag>
                        <Tag icon={<TbBrandKotlin className='anticon' />} color="orange">Kotlin</Tag>
                        <Tag icon={<FaJava className='anticon' />} color="gold">Java</Tag>
                        <Tag icon={<RiDatabase2Fill className='anticon' />} color="lime">SQL</Tag>
                        <Tag icon={<SiCsharp className='anticon' />} color="green">C#</Tag>
                    </div>
                </Col>
                
                <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 10, offset: 2 }}>
                    <Divider orientation="left">Technologies</Divider>
                    <div className='content'>
                        <Tag icon={<SiReact className='anticon' />} color="magenta">React</Tag>
                        <Tag icon={<LoCarbon className='anticon' />} color="red">Carbon Design System</Tag>
                        <Tag icon={<AiOutlineAntDesign className='anticon' />} color="volcano">Ant Design System</Tag>
                        <Tag icon={<SiHtml5 className='anticon' />} color="orange">HTML</Tag>
                        <Tag icon={<SiCss3 className='anticon' />} color="gold">CSS</Tag>
                        <Tag icon={<CgFigma className='anticon' />} color="lime">Figma</Tag>
                        <Tag icon={<FaNode className='anticon' />} color="green">Node.JS</Tag>
                        <Tag icon={<FaUnity className='anticon' />} color="cyan">Unity</Tag>
                        <Tag icon={<GrMysql className='anticon' />} color="blue">MySQL</Tag>
                        <Tag icon={<SiPostgresql className='anticon' />} color="geekblue">PostgreSQL</Tag>
                        <Tag icon={<SiFirebase className='anticon' />} color="purple">Firebase</Tag>
                        <Tag icon={<SiIbm className='anticon' />} color="magenta">IBM Cloud DB2</Tag>
                        <Tag icon={<SiGithubactions className='anticon' />} color="red">Github Actions</Tag>
                        <Tag icon={<SiDocker className='anticon' />} color="volcano">Docker</Tag>
                        <Tag icon={<SiCloudfoundry className='anticon' />} color="orange">IBM Cloud Foundry</Tag>
                        <Tag icon={<SiPostman className='anticon' />} color="gold">Postman</Tag>
                        <Tag icon={<SiCypress className='anticon' />} color="lime">Cypress</Tag>
                        <Tag icon={<SiFlask className='anticon' />} color="green">Flask</Tag>
                        <Tag icon={<SiArduino className='anticon' />} color="cyan">Arduino</Tag>
                    </div>
                </Col>
            </Row>
        </div>
    );
  }
  
  export default Skills;
  