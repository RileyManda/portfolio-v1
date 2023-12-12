import { FaTwitter, FaLinkedin, FaGithub, FaStackOverflow, FaMedium } from 'react-icons/fa';
import { FaFilePdf } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Tooltip } from 'react-tooltip';


const SocialMediaButtons = () => {
    return (
        <div>
            <Tooltip
                anchorSelect=".myresume"
                content="MyResume"
                style={{ backgroundColor: '#ffa000', color: "#fff" }}
                data-tooltip-offset={50}
                place={"right"}
            />
            <div className="social-media-buttons social-anim">
                <a href="https://www.linkedin.com/in/rileymanda/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin style={{ width: '50px', height: '50px' }} />
                </a>
                <a href="https://github.com/RileyManda/" target="_blank" rel="noopener noreferrer">
                    <FaGithub style={{ width: '50px', height: '50px' }} />
                </a>
                <a href="https://stackoverflow.com/users/6129553/rileymanda" target="_blank" rel="noopener noreferrer">
                    <FaStackOverflow style={{ width: '50px', height: '50px' }} />
                </a>
                <a href="https://medium.com/@rileymanda" target="_blank" rel="noopener noreferrer">
                    <FaMedium style={{ width: '50px', height: '50px' }} />
                </a>
                <a href="https://twitter.com/rileycodez" target="_blank" rel="noopener noreferrer">
                    <FaTwitter style={{ width: '50px', height: '50px' }} />
                </a>
                <a href="mailto:rileymanda0@email.com" target="_blank" rel="noopener noreferrer">
                    <MdEmail style={{ width: '50px', height: '50px' }} />
                </a>
                <a className="myresume" href="https://drive.google.com/file/d/1ahl7i3U51XcgLn4KXKoHZY885YKwsIdJ/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                    <FaFilePdf style={{ width: '50px', height: '50px' }} />
                </a>

            </div>
        </div>
    );
};

export default SocialMediaButtons;