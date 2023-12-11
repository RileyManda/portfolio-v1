import { Container } from "react-bootstrap";
import experienceData from "../api/experienceData";
import Stack from 'react-bootstrap/Stack';

const Experience = () => {
  return (
    <div>
      <Container fluid className="py-5 d-flex justify-content-center align-items-center">
        <Stack direction="vertical" className="experience-container">
        <div className="experience-title">
          <h2>Experience</h2>
        </div>
        <div className="main-timeline">
          <ul className="timeline-with-icons">
            {experienceData.map((experience, index) => (
              <li
                className={`timeline-item mb-5 ${index % 2 === 0 ? 'left' : 'right'
                  } ${index % 4 === 0 ? 'large' : 'small'}`}
                key={index}
              >
                <Stack direction="vertical" gap={3} className="timeline-icon">
                  {experience.icons.map((icon, i) => (
                    <div className="experience-icons" key={i} style={{ color: experience.iconColor[i] }}>
                      {icon}
                    </div>
                  ))}
                </Stack>
                <div className="timeline-content">
                  <h5 className="fw-bold">{experience.position}</h5>
                  <h5 className="fw-bold">{experience.company}</h5>
                  <p className="text-muted mb-2 fw-bold">{experience.date}</p>
                  <p className="text-muted">{experience.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        </Stack>
      </Container>

    </div>
  );
};

export default Experience;
