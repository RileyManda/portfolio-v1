import { FaTwitter, FaLinkedin, FaGithub, FaStackOverflow, FaMedium } from 'react-icons/fa';

const SocialMediaButtons = () => {
    return (
        <div className="social-media-buttons">
            <a href="https://www.linkedin.com/in/rileymanda/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin style={{ color: 'blue', width: '50px', height: '50px' }} />
            </a>
            <a href="https://github.com/RileyManda/" target="_blank" rel="noopener noreferrer">
                <FaGithub style={{ color: 'blue', width: '50px', height: '50px' }} />
            </a>
            <a href="https://stackoverflow.com/users/6129553/rileymanda" target="_blank" rel="noopener noreferrer">
                <FaStackOverflow style={{ color: 'blue', width: '50px', height: '50px' }} />
            </a>
            <a href="https://medium.com/@rileymanda" target="_blank" rel="noopener noreferrer">
                <FaMedium style={{ color: 'blue', width: '50px', height: '50px' }} />
            </a>
            <a href="https://twitter.com/rileycodez" target="_blank" rel="noopener noreferrer">
                <FaTwitter style={{ color: 'blue', width: '50px', height: '50px' }} />
            </a>


        </div>
    );
};

export default SocialMediaButtons;