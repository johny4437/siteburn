import React from 'react';
import '../assets/css/Menu.css';
import Logo from '../assets/img/logo.png'
export default function Menu() {
    return (
        <div className="header">
            <a href="/"  className="logo"><img src={Logo} alt="logo"/></a>
            <input type="checkbox" className="menu-btn" id="menu-btn"/>
            <label  className="menu-icon" htmlFor="menu-btn"><span className="nav-icon"></span></label>
            <ul className="menu">
                <li className="active"><a href="#services">serviços</a></li>
                <li className="active"><a href="#portfolio">portfolio</a></li>
                <li className="active"><a href="#about">sobre nós</a></li>
                <li className="active"><a href="#team">equipe</a></li>
                <li className="active"><a href="#contact">contato</a></li>
            </ul>
        </div>
    )
}
