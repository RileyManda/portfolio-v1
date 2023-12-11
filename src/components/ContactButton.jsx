import Button from 'react-bootstrap/Button'
import { MdEmail } from "react-icons/md";
const ContactButton = () => {
    const emailAddress = 'rileymanda0@email.com';
    const handleClick = () => {
        window.open(`mailto:${emailAddress}`, '_blank');
    };
    return (
        <div className="contact-button">
            <Button variant="primary" className="fab-button" onClick={handleClick}>
                <MdEmail style={{ width: '50px', height: '50px' }} />
            </Button>
        </div>
    );
}


export default ContactButton;
