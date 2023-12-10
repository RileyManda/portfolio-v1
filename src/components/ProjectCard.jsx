import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import { FaReact, FaNodeJs, FaBootstrap } from "react-icons/fa";
import Stack from 'react-bootstrap/Stack';
import { AiOutlineLink, AiFillGithub } from 'react-icons/ai';
import { SiRedux, SiStyledcomponents } from "react-icons/si";



// const techColors = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark'];

const techIconMap = {
    react: <FaReact />,
    'react-testing-library': <FaReact />,
    bootstrap: <FaBootstrap />,
    'redux-toolkit': <SiRedux />,
    'react-styled-component': <SiStyledcomponents />,
    'Redux-toolkit': <FaReact />,
    'ruby on rails': <FaReact />,
    'api authentication': <FaReact />,
    devise: <FaReact />,
    rails: <FaReact />,
    cancancan: <FaReact />,
    ruby: <FaReact />,
    'tailwind - css': <FaNodeJs />,
    'themeui': <SiRedux />,

};

const ProjectCard = ({ image, title, description, demo, github, techarray, created, updated }) => {
    const handleDemoClick = () => {
        window.open(demo, '_blank');
    };

    const handleGithubClick = () => {
        window.open(github, '_blank');
    };

    return (
        <div>
            <Card className="project-card" style={{ width: '23rem', marginBottom: '3rem', height: '550px' }}>
                <div className="screw top-left" />
                <div className="screw top-right" />
                <div className="screw bottom-left" />
                <div className="screw bottom-right" />
                <Card.Img variant="top" src={image} style={{ height: '250px', objectFit: 'cover' }} />
                <Card.ImgOverlay style={{ height: '250px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                    <Badge bg="dark" style={{ opacity: '0.8' }}>
                        <Card.Title style={{ fontSize: '18px', color: 'white' }}>{title}</Card.Title>
                    </Badge>
                </Card.ImgOverlay>
                <Card.Body>
                    <Card.Text className="card-description">{description}</Card.Text>
                    <div className="tech-icon">
                        {techarray.map((tech, index) => (
                            <span key={index} className="tech-icon" style={{ marginRight: '5px', marginBottom: '5px' }}>
                                {techIconMap[tech]}
                            </span>
                        ))}
                    </div>

                </Card.Body>
                <Card.Footer className="card-footer">
                    <Stack direction="horizontal" gap={3} className="footer-stack">
                        <Button onClick={handleDemoClick} size="sm" variant="dark">
                            <AiOutlineLink style={{ marginRight: '5px' }} />
                            Demo
                        </Button>
                        <Button onClick={handleGithubClick} size="sm" variant="dark">
                            <AiFillGithub style={{ marginRight: '5px' }} />
                            GitHub
                        </Button>
                        <small className="footer-text">Created: {created}</small>
                        <div className="vr" />
                        <small className="footer-text">Updated: {updated}</small>
                    </Stack>
                </Card.Footer>
            </Card>
        </div>
    );
};

ProjectCard.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    demo: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
    techarray: PropTypes.arrayOf(PropTypes.string).isRequired,
    updated: PropTypes.string.isRequired,
    created: PropTypes.string.isRequired,
};

export default ProjectCard;
