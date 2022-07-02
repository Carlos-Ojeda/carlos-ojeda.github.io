import React from 'react';
import { Card,
         Carousel,
         Image,
         Row,
         Col,
         Divider } from 'antd';
const { Meta } = Card;

const projectCard = ( title, description, image1, alt1, image2, alt2, image3, alt3, gitUrl) => {
    const contentStyle = {
      weight: '100%'
    };
  
    return(
      <Card
        hoverable={true}
        cover={
          <Carousel autoplay style={contentStyle}> 
            <Image style={contentStyle} alt={alt1} src={image1} /> 
            <Image style={contentStyle} alt={alt2} src={image2} />
            <Image style={contentStyle} alt={alt3} src={image3} /> 
          </Carousel>
        }
        actions={[
          "Code",
          "Learn More",
        ]}
      >
        <Meta
          title={title}
          description={description}
        />
      </Card>
    )
};

function Projects() {
    return (
        <div className='projects' id="projects">
            <Divider orientation="left">Projects</Divider>
            <Row justify="space-around" align="middle" gutter={[16, 24]}>
                <Col xs={{ span: 24 }} sm={{ span: 24 }} lg={{ span: 12 }}>
                    {projectCard("Card title", "This is the description", "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png", "Proyect image")}
                </Col>
                <Col xs={{ span: 24 }} sm={{ span: 12 }} lg={{ span: 6 }}>
                    {projectCard("Card title", "This is the description", "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png", "Proyect image")}
                </Col>
                <Col xs={{ span: 24 }} sm={{ span: 12 }} lg={{ span: 6 }}>
                    {projectCard("Card title", "This is the description", "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png", "Proyect image")}
                </Col>
                <Col xs={{ span: 24 }} sm={{ span: 12 }} lg={{ span: 6 }}>
                    {projectCard("Card title", "This is the description", "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png", "Proyect image")}
                </Col>
                <Col xs={{ span: 24 }} sm={{ span: 12 }} lg={{ span: 6 }}>
                    {projectCard("Card title", "This is the description", "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png", "Proyect image")}
                </Col>
                <Col xs={{ span: 24 }} sm={{ span: 12 }} lg={{ span: 6 }}>
                    {projectCard("Card title", "This is the description", "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png", "Proyect image")}
                </Col>
                <Col xs={{ span: 24 }} sm={{ span: 12 }} lg={{ span: 6 }}>
                    {projectCard("Card title", "This is the description", "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png", "Proyect image")}
                </Col>
            </Row>
        </div>
    );
  }
  
  export default Projects;
  