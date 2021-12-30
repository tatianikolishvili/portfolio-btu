import React from "react";
import { Link } from "react-router-dom";


function Nav() {
    return (
        <nav className="navigation">
            <ul className="nav-links">
                <Link className = "navStyle" to="/home">
                    <li>Home</li>
                </Link>
                <Link className = "navStyle" to="/about">
                    <li>About</li>
                </Link>
                <Link className = "navStyle" to="/contact">
                    <li>Contact</li>
                </Link>
                <Link className = "navStyle" to="/projects">
                    <li>Projects</li>
                </Link>
            </ul>
        </nav>
    )
}


export default Nav;