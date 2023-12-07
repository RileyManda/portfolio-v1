import jetlogixImage from '../assets/project-images/jetlogix.png'
import PortfolioImage from '../assets/project-images/portfolio.png'
import CoincraftImage from '../assets/project-images/coincraft-home.png'
import CixhubImage from '../assets/project-images/cixhub.png'
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
    "created_at": "2023-01-01T12:00:00Z",
    "updated_at": "2023-01-05T15:30:00Z"
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
    "created_at": "2023-01-01T12:00:00Z",
    "updated_at": "2023-01-05T15:30:00Z"
  },
  {
    "name": "Portfolio",
    "description": "One distinctive feature of this portfolio is its seamless integration with the GitHub API.The portfolio has real-time updates for every project I add to my GitHub profile, providing insights into my latest projects, contributions, and coding activities.This innovative integration adds a layer of dynamism to the portfolio, creating an immersive experience for visitors eager to explore the depth and breadth of my coding endeavors directly from this digital showcase.",
    "homepage": "https://rileysportfolio.onrender.com/",
    "html_url": "https://github.com/RileyManda/rileysportfolio",
    "topics": ["react","vite3","react-router","react-bootstrap","reactjs-components","githubapi","react-jest","prop-types","react-testing-library"],
    "image": PortfolioImage,
    "created_at": "2023-01-01T12:00:00Z",
    "updated_at": "2023-01-05T15:30:00Z"
  },
  {
    "name": "CoinCraft",
    "description": "CoinCraft is a powerful and user-friendly Rails budgeting application designed to help you take control of your finances and achieve your financial goals. With CoinCraft, you can craft your financial future with ease, precision, and confidence.",
    "homepage": "https://coincraft.onrender.com/",
    "html_url": "https://github.com/RileyManda/coincraft",
    "topics": [
      "ruby on rails",
      "pry",
      "rspec",
      "devise",
      "render",
      "capybara",
      "cancancan"
    ],
    "image": CoincraftImage,
    "created_at": "2023-02-01T10:30:00Z",
    "updated_at": "2023-02-10T18:45:00Z"
  },
    {
    "name": "CixHub Website",
    "description": "Cixhub's official website, built with react and nextjs with themeui and styled components.",
    "homepage": "https://cixhub.netlify.app/",
    "html_url": "https://github.com/RileyManda/cixhub",
    "topics": ["react", "vite3", "react-router", "react-bootstrap", "reactjs-components", "githubapi", "react-jest", "prop-types", "react-testing-library"],
    "image": CixhubImage,
    "created_at": "2023-01-01T12:00:00Z",
    "updated_at": "2023-01-05T15:30:00Z"
  },
  {
    "name": "EventHrabor",
    "description": "Currently building Event Harbor, a Rails web application that allows users to add, update, and delete events.The application is a work in progress and is built using Ruby on Rails and PostgreSQL as the database,TailwindUI and Tailwindcss for styling, and Rspec for testing.",
    "homepage": "https://github.com/RileyManda/event-harbor",
    "html_url": "https://github.com/RileyManda/event-harbor",
    "topics": ["react", "vite3", "react-router", "react-bootstrap", "reactjs-components", "githubapi", "react-jest", "prop-types", "react-testing-library"],
    "image": EventHarborImage,
    "created_at": "2023-01-01T12:00:00Z",
    "updated_at": "2023-01-05T15:30:00Z"
  }

];
export default projects;