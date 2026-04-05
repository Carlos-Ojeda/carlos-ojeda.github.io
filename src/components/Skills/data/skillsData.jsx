import { 
    SiFlask, SiArduino, SiCplusplus, SiJavascript, SiPython, SiCsharp, SiCss3, SiHtml5,
    SiReact, SiPostgresql, SiFirebase, SiGithubactions, SiDocker, SiPostman, SiCypress,
    SiCloudfoundry, SiIbm, SiTensorflow, SiScikitlearn, SiPandas, SiNumpy, SiMicrosoftazure, SiLatex
} from 'react-icons/si';
import { FaJava, FaNode, FaUnity, FaGithub } from "react-icons/fa";
import { TbBrandKotlin } from "react-icons/tb";
import { RiDatabase2Fill } from "react-icons/ri";
import { AiOutlineAntDesign } from "react-icons/ai";
import { CgFigma } from "react-icons/cg";
import { GrMysql } from "react-icons/gr";

export const getSkillsData = () => ({
    languages: [
        { icon: <SiCplusplus className='anticon' />, name: "C++", color: "magenta", confident: false },
        { icon: <SiJavascript className='anticon' />, name: "JavaScript", color: "red", confident: true },
        { icon: <SiPython className='anticon' />, name: "Python", color: "volcano", confident: true },
        { icon: <TbBrandKotlin className='anticon' />, name: "Kotlin", color: "orange", confident: false },
        { icon: <FaJava className='anticon' />, name: "Java", color: "gold", confident: false },
        { icon: <RiDatabase2Fill className='anticon' />, name: "SQL", color: "lime", confident: true },
        { icon: <SiCsharp className='anticon' />, name: "C#", color: "green", confident: false }
    ],
    technologies: [
        { icon: <SiTensorflow className='anticon' />, name: "TensorFlow", color: "purple", confident: true },
        { icon: <SiScikitlearn className='anticon' />, name: "Scikit-learn", color: "blue", confident: true },
        { icon: <SiPandas className='anticon' />, name: "Pandas", color: "green", confident: true },
        { icon: <SiNumpy className='anticon' />, name: "Numpy", color: "red", confident: true },
        { icon: <SiPython className='anticon' />, name: "Matplotlib", color: "magenta", confident: true },
        { icon: <SiPython className='anticon' />, name: "Seaborn", color: "volcano", confident: true },
        { icon: <SiMicrosoftazure className='anticon' />, name: "Azure ML", color: "blue", confident: true },
        { icon: <SiLatex className='anticon' />, name: "LaTeX", color: "geekblue", confident: false },
        { icon: <FaGithub className='anticon' />, name: "GitHub", color: "gold", confident: true },
        { icon: <SiReact className='anticon' />, name: "React", color: "magenta", confident: true },
        { icon: <AiOutlineAntDesign className='anticon' />, name: "Carbon Design System", color: "cyan", confident: false },
        { icon: <AiOutlineAntDesign className='anticon' />, name: "Ant Design System", color: "volcano", confident: true },
        { icon: <SiHtml5 className='anticon' />, name: "HTML", color: "orange", confident: true },
        { icon: <SiCss3 className='anticon' />, name: "CSS", color: "gold", confident: true },
        { icon: <CgFigma className='anticon' />, name: "Figma", color: "lime", confident: false },
        { icon: <FaNode className='anticon' />, name: "Node.JS", color: "green", confident: false },
        { icon: <FaUnity className='anticon' />, name: "Unity", color: "cyan", confident: false },
        { icon: <GrMysql className='anticon' />, name: "MySQL", color: "blue", confident: true },
        { icon: <SiPostgresql className='anticon' />, name: "PostgreSQL", color: "geekblue", confident: true },
        { icon: <SiFirebase className='anticon' />, name: "Firebase", color: "purple", confident: false },
        { icon: <SiIbm className='anticon' />, name: "IBM Cloud DB2", color: "magenta", confident: false },
        { icon: <SiGithubactions className='anticon' />, name: "Github Actions", color: "red", confident: true },
        { icon: <SiDocker className='anticon' />, name: "Docker", color: "volcano", confident: true },
        { icon: <SiCloudfoundry className='anticon' />, name: "IBM Cloud Foundry", color: "orange", confident: false },
        { icon: <SiPostman className='anticon' />, name: "Postman", color: "gold", confident: true },
        { icon: <SiCypress className='anticon' />, name: "Cypress", color: "lime", confident: true },
        { icon: <SiFlask className='anticon' />, name: "Flask", color: "green", confident: false },
        { icon: <SiArduino className='anticon' />, name: "Arduino", color: "cyan", confident: false }
    ]
});
