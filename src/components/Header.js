import React from 'react';
import './StylesHeader.css';

function Header() {
    return(
        <div className="header">
            <img src="" alt="menu"/>
            <img src="" alt="logo" />
            <ul className="pages">
                <li>Home</li>
                <li>About</li>
                <li>Courses</li>
                <li>Store</li>
                <li>Jobs</li>
                <li>Contact Us</li>
            </ul>
        
        </div>
    );
};

export default Header;