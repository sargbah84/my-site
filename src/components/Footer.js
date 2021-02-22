import React from 'react';
import { FaLinkedinIn, FaBehance, FaGithub, FaCodepen, FaPinterest } from 'react-icons/fa';

class Footer extends React.Component {
    render(){
        return(
            <footer className="footer position-relative lite py-5 text-center">
                <div className="container">
                    <div className="clearfix">
                        <h1 className="display-1 opacity-25">Contact Me</h1>
                        <p className="opacity-75">You can find me or my works on these any of these apps.</p>
                    </div>
                    <div className="socials">
                        <a href="https://www.linkedin.com/in/prince-sargbah-b0155479/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
                        <a href="https://behance.net/sargbah84" target="_blank" rel="noopener noreferrer"><FaBehance /></a>
                        <a href="https://github.com/sargbah84" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                        <a href="https://codepen.io/sargbah84" target="_blank" rel="noopener noreferrer"><FaCodepen /></a>
                        <a href="https://pinterest.com/princesargbah" target="_blank" rel="noopener noreferrer"><FaPinterest /></a>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;