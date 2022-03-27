import React from 'react';
import './styles/header.css'
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <Link className='a bold' to='/'>GreatEat</Link>

            <div className="nav">
                <Link className='a' to='/about'>О нас</Link>
                <Link className='a' to='/about'>Войти</Link>
            </div>
        </div>
    );
};

export default Header;