import React from 'react';
import '../assets/css/Menu.css';
import Logo from '../assets/img/logo.png'
export default function Menu() {
    return (
        <div className="header">
            <a href="/"  className="logo">BURN</a>
            <input type="checkbox" className="menu-btn" id="menu-btn"/>
            <label  className="menu-icon" htmlFor="menu-btn"><span className="nav-icon"></span></label>
            <ul className="menu">
                <li><a href="#services">serviços</a></li>
                <li><a href="#portfolio">portfolio</a></li>
                <li><a href="#about">sobre nós</a></li>
                <li><a href="#team">equipe</a></li>
                <li><a href="#contact">contato</a></li>
            </ul>
        </div>
    )
}
