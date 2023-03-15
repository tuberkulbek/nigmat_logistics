import React from "react";
import { NavLink } from "react-router-dom";
import "./navigation.css"

import logo from "../../assets/images/logo.png"

function Navigation() {

    return (
        <div id="navigation">
            <div className="logo">
                <NavLink to="/"><img src={logo} /></NavLink>
            </div>
            <div className="list">
                <ul>
                    <li><NavLink to="/do">Что мы делаем</NavLink></li>
                    <li><NavLink to="/about">О нас</NavLink></li>
                    <li><NavLink to="/contact">Cвяжитесь с нами</NavLink></li>
                </ul>
            </div>
        </div>
    );
}

export default Navigation;