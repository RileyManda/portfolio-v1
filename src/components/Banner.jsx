import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
// import Carousel from 'react-bootstrap/Carousel';
import Stack from 'react-bootstrap/Stack';
import { BsFillCaretDownSquareFill } from 'react-icons/bs';
import introductionData from '../api/IntroductionData';
import AnimData from './AnimData';
import SocialMediaButtons from './SocialMedia';

const Banner = () => {
  const [currentAnimData] = useState(0);


  const handleArrowClick = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      const offsetTop = projectsSection.offsetTop;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <div className="banner-container d-flex align-items-center justify-content-center">
      <Container fluid>
        <SocialMediaButtons />
        <div className="banner-content">
          {introductionData.map((project, index) => (
            <div key={index} className="banner-item">
              <Row className="align-items-center text-center">
                <Col sm={12} lg={6} className="carousel-item-content d-flex justify-content-center">
                  <Stack gap={3} direction="vertical" className='intro-container'>
                    <h1 className="greeting">{project.greeting}</h1>
                    <h1 className="iam">{project.iam}</h1>
                    <h1 className="name">{project.name}</h1>
                    <p className="intro">{project.introduction}</p>
                    <p className="intro2">{project.introduction2}</p>
                    <p className="whatimadoing">{project.whatimadoing}</p>
                  </Stack>
                </Col>
                <Col sm={12} lg={6} className="carousel-item-content d-flex justify-content-center">
                  <Stack direction="vertical" className='anim-layout'>
                    {AnimData[currentAnimData % AnimData.length]()}
                  </Stack>
                </Col>
              </Row>
            </div>
          ))}
        </div>
        <div className="hero-arrow-container">
          <div className="hero-arrow" onClick={handleArrowClick}>
            <BsFillCaretDownSquareFill size={30} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
