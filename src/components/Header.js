import React from "react";
import Avatar from "../img/avatar.jpg";
import { FaLinkedinIn, FaBehance, FaGithub, FaCodepen, FaPinterest } from 'react-icons/fa';

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="container">
          <div className="hero">
			<figure className="image">
            	<img src={Avatar} className="is-rounded" alt="Prince Sargbah" />
			</figure>
            <h1>Prince J. Sargbah</h1>
            <p className="position">Full Stack Developer</p>
            <p>
              I am a husband, a father of 3 and a full stack developer based in
              San Diego, CA. I love to design as much as I love to code.
            </p>
			  <div className="socials">
				<a href="https://www.linkedin.com/in/prince-sargbah-b0155479/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
				<a href="https://behance.net/sargbah84" target="_blank" rel="noopener noreferrer"><FaBehance /></a>
				<a href="https://github.com/sargbah84" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
				<a href="https://codepen.io/sargbah84" target="_blank" rel="noopener noreferrer"><FaCodepen /></a>
				<a href="https://pinterest.com/princesargbah" target="_blank" rel="noopener noreferrer"><FaPinterest /></a>
			  </div>
		
          </div>
        </div>
      </header>
    );
  }
}

export default Header;