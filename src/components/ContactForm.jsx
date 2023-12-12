import { useState } from 'react';
import Form from 'react-bootstrap/Form';

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
        const form = document.createElement('form');
        form.action = 'https://formsubmit.co/rileymanda0@gmail.com'; 
        form.method = 'POST';
        form.target = '_blank';

        // Attach form data
        Object.entries(formValues).forEach(([name, value]) => {
            const input = document.createElement('input');
            input.type = 'hidden';
            input.name = name;
            input.value = value;
            form.appendChild(input);
        });

        document.body.appendChild(form);
        form.submit();

        // Clear the form after submission
        setFormValues({
            name: '',
            _subject: '',
            email: '',
            message: '',
        });
    };

    return (
        <Form
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
                    name="message"
                    value={formValues.message}
                    onChange={handleChange}
                    required
                    style={{ border: `1px solid var(--brand)`, borderRadius: '4px' }}
                />
            </Form.Group>
            <button className="send-button" type="submit">
                Send
            </button>
        </Form>
    );
};

export default ContactForm;
