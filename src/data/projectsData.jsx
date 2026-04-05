import React from 'react';
import { Tag } from 'antd';
import { 
    SiFlask, SiArduino, SiCplusplus, SiJavascript, SiPython, SiCsharp, SiCss3, SiHtml5,
    SiReact, SiPostgresql, SiFirebase, SiGithubactions, SiDocker, SiPostman, SiCypress,
    SiCloudfoundry, SiIbm, SiTensorflow, SiPandas, SiNumpy, SiMicrosoftazure, SiLatex
} from 'react-icons/si';
import { FaJava, FaNode, FaUnity } from "react-icons/fa";
import { TbBrandKotlin } from "react-icons/tb";
import { RiDatabase2Fill } from "react-icons/ri";
import { CgFigma } from "react-icons/cg";
import { GrMysql } from "react-icons/gr";
// import { ReactComponent as LoCarbon } from '../components/Skills/carbon.svg';

export const getProjectsData = (t) => [
    {
        title: t('projects.items.streamStagePrediction.title'),
        description: t('projects.items.streamStagePrediction.description'),
        detailedDescription: t('projects.items.streamStagePrediction.detailedDescription'),
        category: t('projects.items.streamStagePrediction.category'),
        image1: "/assets/streamStage/streamStage-0.png",
        image2: "/assets/streamStage/streamStage-1.png",
        image3: "/assets/streamStage/streamStage-2.png",
        tags: (
            <div>
                <Tag icon={<SiTensorflow className='anticon' />} color="magenta">TensorFlow</Tag>
                <Tag icon={<SiPandas className='anticon' />} color="red">Pandas</Tag>
                <Tag icon={<SiNumpy className='anticon' />} color="volcano">NumPy</Tag>
                <Tag icon={<SiMicrosoftazure className='anticon' />} color="blue">Azure ML</Tag>
                <Tag icon={<SiPython className='anticon' />} color="orange">Python</Tag>
                <Tag icon={<SiLatex className='anticon' />} color="geekblue">LaTeX</Tag>
                <Tag icon={<SiGithubactions className='anticon' />} color="gold">GitHub</Tag>
            </div>
        )
    },
    {
        title: t('projects.items.peripheralLoans.title'),
        description: t('projects.items.peripheralLoans.description'),
        detailedDescription: t('projects.items.peripheralLoans.detailedDescription'),
        category: t('projects.items.peripheralLoans.category'),
        image1: "/assets/peripheral/peripheral-0.png",
        image2: "/assets/peripheral/peripheral-1.png",
        image3: "/assets/peripheral/peripheral-2.png",
        tags: (
            <div>
                <Tag icon={<SiReact className='anticon' />} color="magenta">React</Tag>
                <Tag icon={<FaNode className='anticon' />} color="red">Node.JS</Tag>
                <Tag icon={<SiJavascript className='anticon' />} color="volcano">JavaScript</Tag>
                <Tag icon={<SiIbm className='anticon' />} color="orange">IBM Cloud DB2</Tag>
                <Tag icon={<SiPostgresql className='anticon' />} color="gold">PostgreSQL</Tag>
                <Tag icon={<RiDatabase2Fill className='anticon' />} color="lime">SQL</Tag>
                <Tag icon={<SiCloudfoundry className='anticon' />} color="green">IBM Cloud Foundry</Tag>
                                    <Tag color="cyan">Carbon Design System</Tag>
                <Tag icon={<SiGithubactions className='anticon' />} color="blue">Github Actions</Tag>
                <Tag icon={<SiDocker className='anticon' />} color="geekblue">Docker</Tag>
                <Tag icon={<SiPostman className='anticon' />} color="purple">Postman</Tag>
                <Tag icon={<SiCypress className='anticon' />} color="magenta">Cypress</Tag>
            </div>
        )
    },
    {
        title: t('projects.items.urbanMobility.title'),
        description: t('projects.items.urbanMobility.description'),
        detailedDescription: t('projects.items.urbanMobility.detailedDescription'),
        category: t('projects.items.urbanMobility.category'),
        image1: "/assets/urbanMobility/urbanMobility-0.png",
        image2: "/assets/urbanMobility/urbanMobility-1.png",
        image3: "/assets/urbanMobility/urbanMobility-2.png",
        tags: (
            <div>
                <Tag icon={<SiFlask className='anticon' />} color="magenta">Flask</Tag>
                <Tag icon={<SiPython className='anticon' />} color="red">Python</Tag>
                <Tag icon={<FaUnity className='anticon' />} color="volcano">Unity</Tag>
                <Tag icon={<SiCsharp className='anticon' />} color="orange">C#</Tag>
            </div>
        )
    },
    {
        title: t('projects.items.hiredocs.title'),
        description: t('projects.items.hiredocs.description'),
        detailedDescription: t('projects.items.hiredocs.detailedDescription'),
        category: t('projects.items.hiredocs.category'),
        image1: "/assets/amdocs/amdocs-0.png",
        image2: "/assets/amdocs/amdocs-1.png",
        image3: "/assets/amdocs/amdocs-2.png",
        tags: (
            <div>
                <Tag icon={<SiJavascript className='anticon' />} color="magenta">JavaScript</Tag>
                <Tag icon={<RiDatabase2Fill className='anticon' />} color="red">SQL</Tag>
                <Tag icon={<SiHtml5 className='anticon' />} color="volcano">HTML</Tag>
                <Tag icon={<SiCss3 className='anticon' />} color="orange">CSS</Tag>
                <Tag icon={<CgFigma className='anticon' />} color="gold">Figma</Tag>
                <Tag icon={<GrMysql className='anticon' />} color="lime">MySQL</Tag>
            </div>
        )
    },
    {
        title: t('projects.items.lexicalAnalyzer.title'),
        description: t('projects.items.lexicalAnalyzer.description'),
        category: t('projects.items.lexicalAnalyzer.category'),
        image1: "/assets/lexicalAnalyzer/lexical-0.jpg",
        image2: "/assets/lexicalAnalyzer/lexical-1.png",
        image3: "/assets/lexicalAnalyzer/lexical-2.png",
        tags: (
            <div>
                <Tag icon={<SiCplusplus className='anticon' />} color="magenta">C++</Tag>
                <Tag icon={<FaJava className='anticon' />} color="red">Java</Tag>
            </div>
        )
    },
    {
        title: t('projects.items.maraca.title'),
        description: t('projects.items.maraca.description'),
        category: t('projects.items.maraca.category'),
        image1: "/assets/maraca/maraca-0.png",
        image2: "/assets/maraca/maraca-1.png",
        image3: "/assets/maraca/maraca-2.png",
        tags: (
            <div>
                <Tag icon={<SiArduino className='anticon' />} color="magenta">Arduino</Tag>
                <Tag icon={<SiFirebase className='anticon' />} color="red">Firebase</Tag>
            </div>
        )
    },
    {
        title: t('projects.items.foodBank.title'),
        description: t('projects.items.foodBank.description'),
        detailedDescription: t('projects.items.foodBank.detailedDescription'),
        category: t('projects.items.foodBank.category'),
        image1: "/assets/foodBank/foodbank-0.png",
        image2: "/assets/foodBank/foodbank-1.png",
        image3: "/assets/foodBank/foodbank-2.png",
        tags: (
            <div>
                <Tag icon={<TbBrandKotlin className='anticon' />} color="magenta">Kotlin</Tag>
                <Tag icon={<SiFirebase className='anticon' />} color="red">Firebase</Tag>
            </div>
        )
    },
    {
        title: t('projects.items.endlessRunner.title'),
        description: t('projects.items.endlessRunner.description'),
        category: t('projects.items.endlessRunner.category'),
        image1: "/assets/mazerunner/mazerunner-0.png",
        image2: "/assets/mazerunner/mazerunner-1.png",
        image3: "/assets/mazerunner/mazerunner-2.png",
        tags: (
            <div>
                <Tag icon={<SiCsharp className='anticon' />} color="magenta">C#</Tag>
                <Tag icon={<FaUnity className='anticon' />} color="red">Unity</Tag>
            </div>
        )
    }
];

export const getCategories = (t) => [
    { value: 'All', label: t('projects.categories.all') },
    { value: t('projects.categories.machineLearning'), label: t('projects.categories.machineLearning') },
    { value: t('projects.categories.webDevelopment'), label: t('projects.categories.webDevelopment') },
    { value: t('projects.categories.mobileApps'), label: t('projects.categories.mobileApps') },
    { value: t('projects.categories.gameDevelopment'), label: t('projects.categories.gameDevelopment') },
    { value: t('projects.categories.iot'), label: t('projects.categories.iot') }
];
