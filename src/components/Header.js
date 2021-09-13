import React from "react";
import "./StylesHeader.css";
import SliderLecturer from "./SliderLecturer";
import SliderStudent from "./SliderStudent";
import logo from "../Images/logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="conatiner">
        <div className="header">
          <SliderLecturer />
          <SliderStudent />
          <img src={logo} alt="logo" className="logo" />

          <ul className="pages">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
            <Link to="/courses">
              <li>Courses</li>
            </Link>
            <Link to="/store">
              <li>Store</li>
            </Link>
            <Link to="/jobs">
              <li>Jobs</li>
            </Link>
            <Link to="/contactUs">
              <li>Contact Us</li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
