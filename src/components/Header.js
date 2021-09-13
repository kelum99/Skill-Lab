import React from "react";
import "./StylesHeader.css";
import SliderLecturer from "./SliderLecturer";
import SliderStudent from './SliderStudent'
import logo from '../Images/logo.png';


function Header() {

  return (
    <>
      <div className="conatiner">
        <div className="header">
          <SliderLecturer />
          <SliderStudent />
          <img src={ logo } alt="logo" className="logo" />
 
          <ul className="pages">
            <li>Home</li>
            <li>About</li>
            <li>Courses</li>
            <li>Store</li>
            <li>Careere</li>
            <li>Contact Us</li>
          </ul>

        </div>
      </div>
    </>
  );
}

export default Header;
