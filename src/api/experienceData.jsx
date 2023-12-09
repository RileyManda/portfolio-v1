import { FaReact, FaNodeJs } from "react-icons/fa";
import { DiRuby } from "react-icons/di";
import { SiMui } from "react-icons/si";
import { BiLogoFlutter } from "react-icons/bi";

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
        icons: [<FaReact key="1" />, <FaNodeJs key="2" />, <DiRuby key="3" />],
        iconColor: ['#0099cc', '#D44848',  '#ff8800']
    },
    {
        position: "SELF-Employed, Remote, South Africa",
        company: "Co",
        date: "April 2023 - Current",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ...",
        icons: [<BiLogoFlutter key="1" />],
        iconColor: ['#0099cc']
    },
    {
        position: "SELF-Employed, Remote, South Africa",
        company: "Co",
        date: "11 March 2020",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ...",
        icons: [<FaReact key="1" />, <FaNodeJs key="2" />, <SiMui key="3" />],
        iconColor: "primary",
    },
    {
        position: "SELF-Employed, Remote, South Africa",
        company: "Co",
        date: "11 March 2020",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ...",
        icons: [<FaReact key="1" />, <FaNodeJs key="2" />, <DiRuby key="3" />],
        iconColor: "primary",
    },
];

export default experienceData;
