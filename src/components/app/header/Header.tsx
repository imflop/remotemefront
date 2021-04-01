import React from 'react';
import { NavLink } from 'react-router-dom';

import './Header.scss';
import logotype from '../../../assets/img/logotype.svg';

const Header = () => {
    return (
        <header className="header">
            <div className="header__inner">
                <NavLink to="/" className="logotype">
                    <img src={logotype} className="logotype__img" alt="RemoteMe — Easy way to find remote work in IT"/>
                </NavLink>

                <nav className="navbar">
                    <div className="menu">
                        <NavLink to="/" className="menu__item">Find jobs</NavLink>
                    </div>
                    <NavLink to="/" className="post-button">
                        Post a job
                    </NavLink>
                </nav>
            </div>
        </header>
    );
}

export default Header;