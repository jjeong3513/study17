import React from 'react';
import '../style/header.css';
import Nav from './Nav';
import { Link } from 'react-router-dom';

const Header = ({title}) => {
    return (
        <header id='header'>
            <h1><Link to='/'>{title}</Link></h1>
            <Nav />
        </header>
    );
};

export default Header;