import React from "react";
import "./StylesHeader.css";
import SliderLecturer from "./SliderLecturer";
//import SliderStudent from "./SliderStudent";
import logo from "../Images/logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="conatiner">
        <div className="header">
          <SliderLecturer />
          <img src={logo} alt="logo" className="logo" />

          <ul className="pages">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/aboutus">
              <li>About</li>
            </Link>
            <Link to="/courseMain">
              <li>Courses</li>
            </Link>
            <Link to="/UserView">
              <li>Store</li>
            </Link>
            <Link to="/careere">
              <li>Career</li>
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
