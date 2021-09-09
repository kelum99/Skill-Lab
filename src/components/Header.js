import React from "react";
import "./StylesHeader.css";
import Slider from "./Slider";
import logo from '../Images/logo.png';


function Header() {

  return (
    <>
      <div className="conatiner">
        <div className="header">
          <Slider />
          <img src={ logo } alt="logo" className="logo" />
 
          <ul className="pages">
            <li>Home</li>
            <li>About</li>
            <li>Courses</li>
            <li>Store</li>
            <li>Jobs</li>
            <li>Contact Us</li>
          </ul>

        </div>
      </div>
    </>
  );
}

export default Header;
