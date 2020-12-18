import React from "react";
import Avatar from "../img/avatar.jpg";
import { FaLinkedinIn, FaBehance, FaGithub, FaCodepen, FaPinterest } from 'react-icons/fa';

class Header extends React.Component {
  render() {
    return (
      <header className="header dark">
        <div className="container">
          <div className="hero">
      			<figure className="image">
            	<img src={Avatar} className="img-fluid rounded-circle" alt="Prince Sargbah" />
      			</figure>
            <h1>Prince J. Sargbah</h1>
            <p className="position">Full Stack Developer</p>
            <p>
              I am a husband, a father of 3 and a full stack developer based in
              San Diego, CA. I love to design as much as I love to code.
            </p>
    			  <h1 className="signature mt-5 opacity-75">P. Sargbah</h1>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;