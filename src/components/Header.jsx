import React from "react";
import Avatar from "../img/avatar.jpg";
import { FaChevronDown } from 'react-icons/fa';

class Header extends React.Component {
  render() {
    console.log(this.props)
    return (
      <header className="header position-relative dark">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="hero mx-auto clearfix">
                <figure className="image">
                  <img src={Avatar} className="img-fluid rounded-circle" alt="Prince Sargbah" />
                </figure>
                <h1>{this.props.data.name}</h1>
                <p className="position">{this.props.data.position}</p>
                <p>{this.props.data.summary}</p>
                <h1 className="signature my-5 opacity-75">{this.props.data.signature}</h1>
                <div className="clearfix arrow-down mt-4"><FaChevronDown /></div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-box bg-box-1 position-absolute"></div>
        <div className="bg-box bg-box-2 position-absolute"></div>
        <div className="bg-box bg-box-3 position-absolute"></div>
        <div className="bg-box bg-box-4 position-absolute"></div>
      </header>
    );
  }
}

export default Header;