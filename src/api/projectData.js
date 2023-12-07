import jetlogixImage from '../assets/project-images/jetlogix.png'
import PortfolioImage from '../assets/project-images/portfolio.png'
import CoincraftImage from '../assets/project-images/coincraft-home.png'
const projects = [
  {
    "name": "JetLogix",
    "description": "Contributed to the successful development of JetLogix's Private Jet Reservation Application, by implementing the Add Aeroplane, Aeroplane Specs, and Reserve aeroplane components utilizing  React for the front-end and Ruby on Rails for the backend with implementations of TDD and BDD tests with Rspec and react testing library.The application API is built with Ruby on Rails and utilizes PostgreSQL database",
    "homepage": "https://jetlogix.onrender.com/",
    "html_url": "https://github.com/rubydevi/jetlogix-frontend",
    "topics": [
      "react",
      "RubyOnRails",
      "api authentication",
      "postgresql",
      "devise",
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
  }
];
export default projects;