import React from 'react';
import "./NavBar.css";
import Button from '../UI/Button';

const NavBar = (props) => {
    return (
        <nav className="navbar">
            <h1> Login</h1>
            <section className="links">  
            {/*<a href="./# ">Home</a>
            <a href="./#">About</a>*/}
            <Button onClick={props.onLogout}>Logout</Button>
            </section>
        </nav>
    );
};

export default NavBar;
