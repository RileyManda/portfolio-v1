// Contact.js
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ContactButton from './ContactButton';
import Footer from './Footer';
import ContactForm from './ContactForm';

const Contact = () => {
    return (
        <div>
            <Container style={{ boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)', padding: '30px', borderRadius: '8px', width: '100%' }}>
                <div className="experience-title mb-4">
                    <h2>CONTACT ME</h2>
                </div>
                <Row className="justify-content-center mb-5">
                    <Col xs={12} md={6}>
                        <div className="text-center">
                            <h2 className="letcconnect">Lets connect!</h2>
                            <p className="connect-prompt">Have any queries Or exciting projects for me to build?
                            :Please reach out to me here.I typically respond in minutes because I am excited to meet you.</p>
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <ContactForm />
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col xs={12} md={6}>
                        <ContactButton />
                    </Col>
                </Row>
            </Container>
            <div className="footer-container">
                <Footer />
            </div>
        </div>
    );
};

export default Contact;
