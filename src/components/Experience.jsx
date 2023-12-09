import { Container } from "react-bootstrap";
import experienceData from "../api/experienceData";
import Stack from 'react-bootstrap/Stack';

const Experience = () => {
  return (
    <div className="experience-container">
      <div className="section-title py-5 d-flex justify-content-center align-items-center">
        <h2>Experience</h2>
      </div>
      <Container fluid className="py-5 d-flex justify-content-center align-items-center">
        <div className="main-timeline">
          <ul className="timeline-with-icons">
            {experienceData.map((experience, index) => (
              <li className={`timeline-item mb-5 ${index % 2 === 0 ? 'left' : 'right'}`} key={index}>
                <Stack direction="vertical" gap={3} className="timeline-icon">
                  {experience.icons.map((icon, i) => (
                    <div key={i} style={{ color: experience.iconColor[i] }}>
                      {icon}
                    </div>
                  ))}
                </Stack>
                <h5 className="fw-bold">{experience.position}</h5>
                <h5 className="fw-bold">{experience.company}</h5>
                <p className="text-muted mb-2 fw-bold">{experience.date}</p>
                <p className="text-muted">{experience.description}</p>
                <p style={{ color: experience.iconColor }}></p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Experience;
