import React from 'react';
import { Col, Row, Divider } from 'antd';
import { GithubOutlined, TwitterOutlined, LinkedinOutlined, MailOutlined } from '@ant-design/icons';

function Footer() {
    return (
        <div className='footer'>
            <Divider id="contact" style={{color:"white", borderTopColor:"rgb(131, 131, 131)"}}>Contact Me</Divider>
            
            <Row style={{paddingBottom:"24px"}}justify='space-evenly content'>
            <Col><a href="https://www.linkedin.com/in/carlos-noe-ojeda-ang"><LinkedinOutlined className='footer-icon' key="linkedin" /></a></Col>
                <Col><a href="https://github.com/Carlos-Ojeda"><GithubOutlined className='footer-icon' key="github" /></a></Col>
                <Col><a href="https://twitter.com/CarlosOGD"><TwitterOutlined className='footer-icon' key="twitter" /></a></Col>
                <Col><a href="mailto:carlosnoel_ojedaa@icloud.com"><MailOutlined className='footer-icon' key="email" /></a></Col>
            </Row>

            <p style={{color:"white", textAlign:"center"}}>This page is maintained by myself</p>
            <p style={{color:"white", textAlign:"center"}}>Built with <a href="https://reactjs.org/">React</a> & <a href="https://ant.design/">Ant Design</a></p>
            <p style={{color:"white", textAlign:"center"}}>Open source on <a href="https://github.com/">GitHub</a></p>
        </div>
    );
  }
  
  export default Footer;
  