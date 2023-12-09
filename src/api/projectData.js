import jetlogixImage from '../assets/project-images/jetlogix.png'
// import PortfolioImage from '../assets/project-images/portfolio.png'
// import CoincraftImage from '../assets/project-images/coincraft-home.png'
// import CixhubImage from '../assets/project-images/cixhub.png'
import JetLogixSchema from '../assets/project-images/jetlogix-db-schema.png'
import EventHarborImage from '../assets/project-images/eventharbor.webp'
const projects = [
  {
    "name": "JetLogix-frontend",
    "description": "Contributed to the development of JetLogix's front end, a React application that fetches and displays aeroplanes and reservation information from the JetLogix back-end via API endpoints, ensuring a seamless user interface for private jet reservations.",
    "homepage": "https://jetlogix.onrender.com/",
    "html_url": "https://github.com/rubydevi/jetlogix-frontend",
    "topics": [
      "react",
      "react-testing-library",
      "bootstrap5",
      "redux-toolkit",
      "react-styled-component",
      "Redux-toolkit"
    ],
    "image": jetlogixImage,
    "created_at": "2023-11-01T12:00:00Z",
    "updated_at": "2023-11-05T15:30:00Z"
  },
  {
    "name": "JetLogix-API",
    "description": "Contributed to the successful development of JetLogix's API.A secure Ruby on Rails API,that utilizes PostgreSQL database, manages private jet reservations.",
    "homepage": "https://jetlogix.onrender.com/",
    "html_url": "https://github.com/rubydevi/jetlogix-frontend",
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
    "name": "EventHarbor",
    "description": "Currently building Event Harbor, a Rails web application that allows users to add, update, and delete events.The application is a work in progress and is built using Ruby on Rails and PostgreSQL as the database,TailwindUI and Tailwindcss for styling, and Rspec for testing.",
    "homepage": "https://github.com/RileyManda/event-harbor",
    "html_url": "https://github.com/RileyManda/event-harbor",
    "topics": ["rails","devise","cancancan","ruby","tailwind - css"],
    "image": EventHarborImage,
    "created_at": "2023-12-01T12:00:00Z",
    "updated_at": "2023-12-05T15:30:00Z"
  }

];
export default projects;