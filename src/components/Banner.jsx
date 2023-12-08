import { useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchProjects } from '../redux/projects/projectSlice';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
// import Carousel from 'react-bootstrap/Carousel';
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';
import { BsFillCaretDownSquareFill } from 'react-icons/bs';
import { ProgrammingIcons, FrontendIcons, BackendIcons, EditorIcons } from './Icons';
import { orangeIconStyles, blueIconStyles, purpleIconStyles, redIconStyles } from './IconColor';
import introductionData from './IntroductionData';
import AnimData from './AnimData';
import SocialMediaButtons from './SocialMedia';

const Banner = () => {
  const dispatch = useDispatch();
  const [currentAnimData] = useState(0);

  useMemo(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

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
                  <Stack gap={3} direction="vertical" className='stack-layout'>
                    <h1 className="greeting">{project.title}</h1>
                    <p className="intro">{project.description}</p>
                    <p className="whatimdoing">{project.whatimadoing}</p>
                    <Stack direction="horizontal" gap={3}>
                      <Badge pill bg="dark">Front-end</Badge>
                      {FrontendIcons.map((icon, index) => (
                        <div key={index} className="p-2 white-icon">
                          {icon.icon({ style: blueIconStyles, title: icon.label })}
                        </div>
                      ))}
                    </Stack>
                    <Stack direction="horizontal" gap={3}>
                      <Badge pill bg="dark">Languages</Badge>
                      {ProgrammingIcons.map((icon, index) => (
                        <div key={index} className="p-2 white-icon">
                          {icon.icon({ style: orangeIconStyles, title: icon.label })}
                        </div>
                      ))}
                    </Stack>
                    <Stack direction="horizontal" gap={3}>
                      <Badge pill bg="dark">Back-end</Badge>
                      {BackendIcons.map((icon, index) => (
                        <div key={index} className="p-2 white-icon">
                          {icon.icon({ style: purpleIconStyles, title: icon.label })}
                        </div>
                      ))}
                    </Stack>
                    <Stack direction="horizontal" gap={3}>
                      <Badge pill bg="dark">IDEs</Badge>
                      {EditorIcons.map((icon, index) => (
                        <div key={index} className="p-2 white-icon">
                          <icon.icon style={redIconStyles} title={icon.label} />
                        </div>
                      ))}
                    </Stack>
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
