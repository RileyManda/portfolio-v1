import jetlogixImage from '../assets/project-images/jetlogix.png'
import PortfolioImage from '../assets/project-images/portfolio.png'
// import CoincraftImage from '../assets/project-images/coincraft-home.png'
import CixhubImage from '../assets/project-images/cixhub.png'
import JetLogixSchema from '../assets/project-images/jetlogix-db-schema.png'
// import EventHarborImage from '../assets/project-images/eventharbor.webp'

const projects = [
  {
    "name": "JetLogix-frontend",
    "description": "Contributed to the development of JetLogix's front end, a React application that fetches and displays aeroplanes and reservation information from the JetLogix back-end via API endpoints, ensuring a seamless user interface for private jet reservations.",
    "homepage": "https://jetlogix.onrender.com/",
    "html_url": "https://github.com/rubydevi/jetlogix-frontend",
    "topics": [
      "react",
      "bootstrap",
      "redux-toolkit",
      "styled-components",
      "Redux-toolkit",
       "react-testing-library"
    ],
    "image": jetlogixImage,
    "created_at": "2023-11-01T12:00:00Z",
    "updated_at": "2023-11-05T15:30:00Z"
  },
  {
    "name": "JetLogix-API",
    "description": "Contributed to the successful development of JetLogix's API.A secure Ruby on Rails API,that utilizes PostgreSQL database, manages private jet reservations,with API endpoint ready for the Jetlogix Front-End",
    "homepage": "https://jetlogix.onrender.com/",
    "html_url": "https://github.com/rubydevi/jetlogix-backend",
    "topics": [
      "ruby on rails",
       "api authentication",
        "postgresql",
         "devise"
    ],
    "image": JetLogixSchema,
    "created_at": "2023-11-01T12:00:00Z",
    "updated_at": "2023-11-05T15:30:00Z"
  },
  {
    "name": "CixHub",
    "description": "Developed Cixhub's official website MVP,A dynamic website built with react,themui,boostrap and nextjs.All the UI assets,logos and images where specifically crafted for the websites theme using photoshop and Adobexd",
    "homepage": "https://cixhub.netlify.app/",
    "html_url": "https://github.com/RileyManda/cixhub",
    "topics": [
      "react",
      "react-testing-library",
      "nextjs",
      "redux-toolkit",
      "styled-components",
    ],
    "image": CixhubImage,
    "created_at": "2022-12-01T12:00:00Z",
    "updated_at": "2023-12-05T15:30:00Z"
  },
    {
  "name": "GithubPortfolio",
      "description": "Developed a github portfolio project, meticulously crafted to access the github APi and display a list of projects and their tech-stacks.",
    "homepage": "https://rileysportfolio.onrender.com/",
      "html_url": "https://github.com/RileyManda/githubportfolio",
    "topics": [
      "react",
      "react-testing-library",
      "nextjs",
      "redux-toolkit",
      "styled-components",
      "github"
    ],
    "image": PortfolioImage,
    "created_at": "2023-09-01T12:00:00Z",
    "updated_at": "2023-09-05T15:30:00Z"
  }

];
export default projects;