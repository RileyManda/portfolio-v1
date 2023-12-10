import { FaReact, FaNodeJs, FaSwift } from "react-icons/fa";
import { DiRuby, DiMysql } from "react-icons/di";
import { SiFlutter } from "react-icons/si";
import { BiLogoFlutter } from "react-icons/bi";
import { AiFillAndroid } from "react-icons/ai";
import { IoLogoFirebase } from "react-icons/io5";
import { BsFiletypeXml } from "react-icons/bs";


export const orangeIconStyles = {
    color: '#ff8800', // Material Design Orange
    fontSize: '30px',
};

export const blueIconStyles = {
    color: '#0099cc', // Material Design Blue
    fontSize: '30px',
};

export const purpleIconStyles = {
    color: '#9933cc', // Material Design Purple
    fontSize: '30px',
};

export const greenIconStyles = {
    color: '#007e33', // Material Design Green
    fontSize: '30px',
};

export const redIconStyles = {
    color: '#D44848', // Material Design Red
    fontSize: '30px',
};
const experienceData = [
    {
        position: "Full Stack Developer",
        company: "SELF-Employed, Remote, South Africa",
        date: "April 2023 - Current",
        description: "Invested 1500+ hours in skill enhancement, and completed 20+ diverse projects.",
        icons: [<FaReact key="1" />, <FaNodeJs key="2" />, <DiRuby key="3" />,],
        iconColor: ['#0099cc', '#D44848',  '#ff8800'],
    },
    {
        position: "Flutter Developer",
        company: "MOBILE-TECHNOLOGIES,remote,Dubai",
        date: "Jan 2022 - Dec 2022",
        description: "Maintained various Android components and XML forms rendered by the server for seamless integration to Android Devices contributing to streamlining customer experience with sim card registration and sim card service management.",
        icons: [<BiLogoFlutter key="1" />, <DiMysql key="2" />, <BsFiletypeXml key="2" />],
        iconColor: ['#0099cc', '#D44848', '#ff8800'],
    },

    {
        position: "MUNSHIG, India,",
        company: "Developer| Tech consultant| QA Engineer",
        date: "June 2019 - Dec 2021",
        description: "Developed and scaled the MunshiG database design and structure, reducing data redundancy and an increase in data queries from the Client Application increasing customer retention and downloads by 15% a day",
        icons: [<SiFlutter key="1" />, <AiFillAndroid key="2" />, <IoLogoFirebase key="3" />],
        iconColor: ['#0099cc', '#D44848', '#ff8800'],
    },
    {
        position: "Founder, Remote, South Africa",
        company: "CIXHUB",
        date: "May 2018 - Part-time",
        description: "Created a startup, which is still in its early stages of development, characterized by a collection of small-scale projects and a team united by shared dreams without the confines of a traditional structure, and driven solely by our collective passion to positively impact the medical, wellness, and educational spheres.",
        icons: [<FaReact key="1" />, <FaNodeJs key="2" />, <DiRuby key="3" />],
        iconColor: ['#0099cc', '#D44848', '#ff8800'],
    },
    {
        position: "Senior Mobile & Web Application Developer",
        company: "Namibia Media Holdings",
        date: "Nov 2014 - June 2017",
        description: "Developed and Contributed to team development efforts, resulting in the successful delivery of the MyInfo project.",
        icons: [<AiFillAndroid key="1" />, <FaSwift key="2" />, <DiMysql key="3" />],
        iconColor: ['#0099cc', '#D44848', '#ff8800']
    },
];

export default experienceData;
