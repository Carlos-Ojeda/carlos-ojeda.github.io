import React from 'react';
import { Card,
         Carousel,
         Image,
         Row,
         Col,
         Divider,
         Tag } from 'antd';
import { ReactComponent as LoCarbon } from '../Skills/carbon.svg';
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
import { CgFigma } from "react-icons/cg";
import { GrMysql } from "react-icons/gr";


const { Meta } = Card;

const CarouselImage = (alt, src) => {
  return (
      <div className='carousel-image-container'>
          <Image rootClassName={"carousel-proyect-image"} alt={alt} src={src} />
      </div>
  )
};

const projectCard = ( title, description, image1, alt1, image2, alt2, image3, alt3, tags) => {
    const contentStyle = {
      weight: '100%'
    };
  
    return(
      <Card
        hoverable={true}
        cover={
          <Carousel autoplay style={contentStyle} className='carousel carousel-image-container'> 
            {CarouselImage(alt1, image1)}
            {CarouselImage(alt2, image2)}
            {CarouselImage(alt3, image3)}
          </Carousel>
        }
        // actions={[
        //   "Code",
        //   "Learn More",
        // ]}
      >
        <Meta
          title={title}
          description={<>
              <>{description}</>
              <br></br><br></br>
              {tags}
          </>}
        />
      </Card>
    )
};

function Projects() {
    return (
        <div className='projects' id="projects">
            <Divider orientation="left">Projects</Divider>
            <Row justify="space-around" gutter={[16, 24]}>
                <Col xs={{ span: 24 }} sm={{ span: 24 }} lg={{ span: 12 }}>
                    {projectCard("Peripheral Loans", 
                                  "Platform that manages device loans within IBM’s Guadalajara.", 
                                  "/assets/peripheral/peripheral-0.png", "Web App Screenshot 1", 
                                  "/assets/peripheral/peripheral-1.png", "Web App Screenshot 2", 
                                  "/assets/peripheral/peripheral-2.png", "Web App Screenshot 3",
                                  <div>
                                    <Tag icon={<SiReact className='anticon' />} color="magenta">React</Tag>
                                    <Tag icon={<FaNode className='anticon' />} color="red">Node.JS</Tag>
                                    <Tag icon={<SiJavascript className='anticon' />} color="volcano">JavaScript</Tag>
                                    <Tag icon={<SiIbm className='anticon' />} color="orange">IBM Cloud DB2</Tag>
                                    <Tag icon={<SiPostgresql className='anticon' />} color="gold">PostgreSQL</Tag>
                                    <Tag icon={<RiDatabase2Fill className='anticon' />} color="lime">SQL</Tag>
                                    <Tag icon={<SiCloudfoundry className='anticon' />} color="green">IBM Cloud Foundry</Tag>
                                    <Tag icon={<LoCarbon className='anticon' />} color="cyan">Carbon Design System</Tag>
                                    <Tag icon={<SiGithubactions className='anticon' />} color="blue">Github Actions</Tag>
                                    <Tag icon={<SiDocker className='anticon' />} color="geekblue">Docker</Tag>
                                    <Tag icon={<SiPostman className='anticon' />} color="purple">Postman</Tag>
                                    <Tag icon={<SiCypress className='anticon' />} color="magenta">Cypress</Tag>
                                  </div>
                                )}
                </Col>
                <Col xs={{ span: 24 }} sm={{ span: 12 }} lg={{ span: 6 }}>
                    {projectCard("Urban Mobility Simulation", 
                                  "Approach to solve Mexico’s urban mobility problem by reducing vehicular congestion.", 
                                  "/assets/urbanMobility/urbanMobility-0.png", "Urban Simulation Screenshot 1", 
                                  "/assets/urbanMobility/urbanMobility-1.png", "Urban Simulation Screenshot 2", 
                                  "/assets/urbanMobility/urbanMobility-2.png", "Urban Simulation Screenshot 3",
                                  <div>
                                    <Tag icon={<SiFlask className='anticon' />} color="magenta">Flask</Tag>
                                    <Tag icon={<SiPython className='anticon' />} color="red">Python</Tag>
                                    <Tag icon={<FaUnity className='anticon' />} color="volcano">Unity</Tag>
                                    <Tag icon={<SiCsharp className='anticon' />} color="orange">C#</Tag>
                                  </div>
                                )}
                </Col>
                <Col xs={{ span: 24 }} sm={{ span: 12 }} lg={{ span: 6 }}>
                    {projectCard("FoodBank", 
                                  "Android app to donate money and food in Jalisco, Mexico.", 
                                  "/assets/foodBank/foodbank-0.png", "Android App Screenshot 1",
                                  "/assets/foodBank/foodbank-1.png", "Android App Screenshot 2",
                                  "/assets/foodBank/foodbank-2.png", "Android App Screenshot 3",
                                  <div>
                                    <Tag icon={<TbBrandKotlin className='anticon' />} color="magenta">Kotlin</Tag>
                                    <Tag icon={<SiFirebase className='anticon' />} color="red">Firebase</Tag>
                                  </div>
                                )}
                </Col>
                <Col xs={{ span: 24 }} sm={{ span: 12 }} lg={{ span: 6 }}>
                    {projectCard("Hiredocs", 
                                  "Web App to track the Hiring Process in the Talent Acquisition Team at Amdocs.", 
                                  "/assets/amdocs/amdocs-0.png", "Web App Screenshot Homepage",
                                  "/assets/amdocs/amdocs-1.png", "Web App Screenshot Table View",
                                  "/assets/amdocs/amdocs-2.png", "Web App Screenshot New User",
                                  <div>
                                    <Tag icon={<SiJavascript className='anticon' />} color="magenta">JavaScript</Tag>
                                    <Tag icon={<RiDatabase2Fill className='anticon' />} color="red">SQL</Tag>
                                    <Tag icon={<SiHtml5 className='anticon' />} color="volcano">HTML</Tag>
                                    <Tag icon={<SiCss3 className='anticon' />} color="orange">CSS</Tag>
                                    <Tag icon={<CgFigma className='anticon' />} color="gold">Figma</Tag>
                                    <Tag icon={<GrMysql className='anticon' />} color="lime">MySQL</Tag>
                                  </div>
                                )}
                </Col>
                <Col xs={{ span: 24 }} sm={{ span: 12 }} lg={{ span: 6 }}>
                    {projectCard("Endless Runner", 
                                  "A platformer game with an endless runner and collectible objects.", 
                                  "/assets/mazerunner/mazerunner-0.png", "Game Screenshot 1",
                                  "/assets/mazerunner/mazerunner-1.png", "Game Screenshot 2",
                                  "/assets/mazerunner/mazerunner-2.png", "Game Screenshot 3",
                                  <div>
                                    <Tag icon={<SiCsharp className='anticon' />} color="magenta">C#</Tag>
                                    <Tag icon={<FaUnity className='anticon' />} color="red">Unity</Tag>
                                  </div>
                                )}
                </Col>
                <Col xs={{ span: 24 }} sm={{ span: 12 }} lg={{ span: 6 }}>
                    {projectCard("Caraca sanitizer", 
                                  "IoT device to manage the number of people inside a building due to Covid-19.",
                                  "/assets/maraca/maraca-0.png", "Project Presentation Name",
                                  "/assets/maraca/maraca-1.png", "Project Presentation Diagram",
                                  "/assets/maraca/maraca-2.png", "Project Presentation Dashboard",
                                  <div>
                                    <Tag icon={<SiArduino className='anticon' />} color="magenta">Arduino</Tag>
                                    <Tag icon={<SiFirebase className='anticon' />} color="red">Firebase</Tag>
                                  </div>
                                )}
                </Col>
                <Col xs={{ span: 24 }} sm={{ span: 12 }} lg={{ span: 6 }}>
                    {projectCard("Parallel Lexical Analyzer", 
                                  "State Machine to highlight reserved words in .txt files.", 
                                  "/assets/lexicalAnalyzer/lexical-0.jpg", "State Diagram",
                                  "/assets/lexicalAnalyzer/lexical-1.png", ".txt input file",
                                  "/assets/lexicalAnalyzer/lexical-2.png", "HTML output file",
                                  <div>
                                    <Tag icon={<SiCplusplus className='anticon' />} color="magenta" >C++</Tag>
                                    <Tag icon={<FaJava className='anticon' />} color="red">Java</Tag>
                                  </div>
                                )}
                </Col>

            </Row>
        </div>
    );
  }
  
  export default Projects;
  