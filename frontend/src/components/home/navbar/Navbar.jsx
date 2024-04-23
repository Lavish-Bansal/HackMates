// Navbar.js

import React from 'react';
import { NavLink,Link } from 'react-router-dom';
import Logo from '../../../assets/Logo/h1-removebg-preview.png'
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className='mb-10 navBg shadow-md bg-blue-800'>
            <div className="w-10/12 flex justify-between items-center mx-auto h-20">
                <div className='flex items-center'>
                    <img src={Logo} alt="Logo" style={{ width: '100px' }} />
                    <Link to="/" className="-mx-2 text-[25px] text-white">HackMates</Link>
                </div>


                <ul className="flex items-center justify-center text-white">
                    <li className='mx-4 text-[18px] hover:bg-blue-500 hover:shadow-lg  rounded-md' >
                        <NavLink to="/"
                        className="py-2 px-3" activeClassName="active" >Home</NavLink>
                    </li>
                    <li className='mx-4 text-[18px] px-3 py-2 hover:px-3 hover:py-2 rounded-md l hover:bg-blue-500 hover:shadow-lg transition-all 200ms ease' >
                        <NavLink to="/login" 
                        className="py-2 px-3" activeClassName="active">Log In</NavLink>
                    </li>
                    <li className='mx-4 text-[18px] hover: px-3 py-2 rounded-md hover:bg-blue-500 hover:shadow-lg transition-all 200ms ease' >
                        <NavLink to="/signup" 
                        className="py-2 px-3" activeClassName="active">Sign Up</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
