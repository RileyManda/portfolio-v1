import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { IoIosSend } from "react-icons/io";

const ContactForm = () => {
    const [formValues, setFormValues] = useState({
        name: '',
        _subject: '',
        email: '',
        message: '',
    });
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
    };
    const handleRefreshClick = () => {
        // refresh the page
        setFormSubmitted(false);
        window.location.reload();
    };
    const ThankYouMessage = () => (
        <div>
        <div style={{ backgroundColor: '#ffa000', color: 'white', padding: '10px', marginBottom: '10px' }}>
        Thank you for your message! I will respond shortly.
        </div>
            <br />
            <Button className="sendagain" onClick={handleRefreshClick}>
                <IoIosSend style={{ marginRight: '8px' }} />
                Send Riley Another Message
            </Button>
        </div>

    );
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = document.createElement('form');
        form.action = 'https://formsubmit.co/rileymanda0@gmail.com';
        form.method = 'POST';
        form.target = '_blank';

        // form data
        Object.entries(formValues).forEach(([name, value]) => {
            const input = document.createElement('input');
            input.type = 'hidden';
            input.name = name;
            input.value = value;
            form.appendChild(input);
        });

        document.body.appendChild(form);
        form.submit();

        // Clear the form
        setFormValues({
            name: '',
            _subject: '',
            email: '',
            message: '',
        });
        setFormSubmitted(true);
    };


    return (
        <div>
            {formSubmitted ? (
                <ThankYouMessage />
            ) : (
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
            )}
        </div>
    );
};

export default ContactForm;
