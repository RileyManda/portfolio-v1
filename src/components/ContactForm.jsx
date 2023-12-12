import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const ContactForm = () => {
    const [formValues, setFormValues] = useState({
        name: '',
        _subject: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormValues({
            name: '',
            _subject: '',
            email: '',
            message: '',
        });
    };

    return (
        <Form
            action="https://formsubmit.co/rileymanda0@gmail.com"
            method="POST"
            target="_blank"
            onSubmit={handleSubmit}
            style={{ border: `1px solid var(--brand)`, borderRadius: '8px', padding: '20px', width: '100%' }}
        >
            <Form.Group controlId="formName">
                <Form.Control
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formValues.name}
                    onChange={handleChange}
                    required
                    style={{ border: `1px solid var(--brand)`, borderRadius: '4px' }}
                />
            </Form.Group>
            <Form.Group controlId="formSubject">
                <Form.Control
                    type="text"
                    name="_subject"
                    placeholder="Enter your subject"
                    value={formValues._subject}
                    onChange={handleChange}
                    required
                    style={{ border: `1px solid var(--brand)`, borderRadius: '4px' }}
                />
            </Form.Group>
            <Form.Group controlId="formEmail">
                <Form.Control
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formValues.email}
                    onChange={handleChange}
                    required
                    style={{ border: `1px solid var(--brand)`, borderRadius: '4px' }}
                />
            </Form.Group>
            <Form.Group controlId="formMessage">
                <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Type your message here"
                    value={formValues.message}
                    onChange={handleChange}
                    required
                    style={{ border: `1px solid var(--brand)`, borderRadius: '4px' }}
                />
            </Form.Group>
            <Button className="send-button" type="submit">
                Send
            </Button>
        </Form>
    );
};

export default ContactForm;
