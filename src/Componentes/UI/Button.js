import React from 'react'
import "./Button.css";
const Button = (props) => {
    return  <button className="custom" onClick={props.onLogout}>{props.children}</button>;
    
};

export default Button;
