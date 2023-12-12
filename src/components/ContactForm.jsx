// ContactForm.js
import Form from 'react-bootstrap/Form';


const ContactForm = () => {
    return (
        <Form action="https://formsubmit.co/rileymanda0@gmail.com" method="POST" target="_blank"  style={{ border: `1px solid var(--brand)`, borderRadius: '8px', padding: '20px', width: '100%' }}>
            <Form.Group controlId="formName">
                <Form.Control type="text" name="name" placeholder="Enter your name" required style={{ border: `1px solid var(--brand)`, borderRadius: '4px' }} />
            </Form.Group>
            <Form.Group controlId="formSubject">
                <Form.Control type="text" name="_subject" placeholder="Enter your subject" required style={{ border: `1px solid var(--brand)`, borderRadius: '4px' }} />
            </Form.Group>
            <Form.Group controlId="formEmail">
                <Form.Control name="email" type="email" placeholder="Enter your email" required style={{ border: `1px solid var(--brand)`, borderRadius: '4px' }} />
            </Form.Group>
            <Form.Group controlId="formMessage">
                <Form.Control as="textarea" name="message" rows={3} placeholder="Type your message here" required style={{ border: `1px solid var(--brand)`, borderRadius: '4px' }} />
            </Form.Group>
            <button className="send-button" type="submit">
                Send
            </button>
        </Form>
    );
};

export default ContactForm;
