import React, { useState } from 'react'
import logo from "./logo.png";
import { Link } from 'react-router-dom';

const Header = () => {
    let [buttonname, setbuttonName] = useState("Login")
    return (
        <div className='header'>
            <div className='logo-container'>
                <img src={logo} className='logo' />
            </div>
            <div >
                <ul className='nav-links'>
                    <Link to='/'><li>Home</li></Link>
                    <Link to="/about"><li>About  us</li></Link>
                    <Link to='/contact'><li>Contanct Us</li></Link>
                    <Link to='/cart'><li>cart</li></Link>
                </ul>
            </div>
            <div>
                <button className='login-button' onClick={() => {
                    setbuttonName("logOut")
                }}>{buttonname}</button>
            </div>

        </div>
    )
}

export default Header