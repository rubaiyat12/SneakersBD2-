import React from 'react';
import logo from '../../images/Logo.svg';

import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        
            <nav className='header'>
            <img src={logo} alt="" />
            <div>
        {/* <Link to='/home'>Home</Link>
            <Link to='/about'>About</Link> */}
                <Link to='/shop'>Shop</Link>
                <Link to='/order'>Orders</Link>
            <Link to='/products'>Product</Link>
                
                <Link to='/inventory'>Inventory</Link>
            </div>
            </nav>
        
        
    );
};

export default Header;