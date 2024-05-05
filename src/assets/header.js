import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from './logo.svg';
import './style.css';

function Header() {
    return (
        <header className="header">
            <Link to="/">
                <img src={logo} alt="Logo Kasa" className="header-logo" />
            </Link>
            <nav className="nav">
                <NavLink
                    activeclassname="active"
                    className="link"
                    exact="true"
                    to="/"
                >
                Accueil
                </NavLink>
                <NavLink
                    activeclassname="active"
                    className="link"
                    to="/a-propos"
                >
                A Propos
                </NavLink>
            </nav>
        </header>
    );
}

export default Header;