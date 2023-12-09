import Container from 'react-bootstrap/Container';
import experienceData from '../api/experienceData';

const Experience = () => {
  return (
    <Container fluid className="py-5 experience-container">
      <ul className="timeline-with-icons">
        {experienceData.map((experience, index) => (
          <li key={index} className="timeline-item mb-5">
            <h5 className="fw-bold">{experience.position}</h5>
            <h5 className="fw-bold">{experience.company}</h5>
            <p className="text-muted mb-2 fw-bold">{experience.date}</p>
            <p className="text-muted">{experience.description}</p>
          </li>
        ))}
      </ul>
    </Container>
  );
};
export default Experience;