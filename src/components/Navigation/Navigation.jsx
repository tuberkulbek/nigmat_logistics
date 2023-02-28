import React from "react";
import { NavLink } from "react-router-dom";
import "./navigation.css"

function Navigation() {

    return (
        <div id="navigation">
            <div className="logo">
                <h3><NavLink to="/">Logistics</NavLink></h3>
            </div>
            <div className="list">
                <ul>
                    <li><NavLink to="/do">Что мы делаем</NavLink></li>
                    <li><NavLink to="/about">О нас</NavLink></li>
                    <li><NavLink to="/contact">Если возникнут вопросы</NavLink></li>
                </ul>
            </div>
        </div>
    );
}

export default Navigation;