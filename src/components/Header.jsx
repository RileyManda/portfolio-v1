import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import PropTypes from 'prop-types';
import Nav from 'react-bootstrap/Nav';

const Header = ({ homeRef, projectsRef, experienceRef, contactRef }) => {
  const scrollToRef = (ref) => {
    if (ref.current) {
      window.scrollTo({ top: ref.current.offsetTop - 100, behavior: 'smooth' });
    }
  };

  return (
    <Navbar expand="lg" sticky="top" className="custom-navbar">
      <Container fluid>
        <Navbar.Brand href="/" className="brand">
          RileyManda
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-center">
          <Nav className="nav-link" style={{ maxHeight: '100px' }} navbarScroll >
            <Nav.Link onClick={() => scrollToRef(homeRef)} >Home</Nav.Link>
            <Nav.Link onClick={() => scrollToRef(projectsRef)}>Projects</Nav.Link>
            <Nav.Link onClick={() => scrollToRef(experienceRef)}>Experience</Nav.Link>
            <Nav.Link href="https://drive.google.com/file/d/1ahl7i3U51XcgLn4KXKoHZY885YKwsIdJ/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              Resume
            </Nav.Link>
            <Nav.Link onClick={() => scrollToRef(contactRef)}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
Header.propTypes = {
  homeRef: PropTypes.object.isRequired,
  projectsRef: PropTypes.object.isRequired,
  experienceRef: PropTypes.object.isRequired,
  contactRef: PropTypes.object.isRequired,
};
export default Header;