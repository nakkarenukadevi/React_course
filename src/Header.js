import React, { useState } from 'react'
import logo from "./logo.png";
import { Link } from 'react-router-dom';
import "./App.css"

const Header = () => {
    let [buttonname, setbuttonName] = useState("Login")
    return (

        <div className=' shadow-lg font-serif font-bold fixed top-0 w-full bg-black text-white '>
            <div className='container mx-auto flex justify-between items-center z-10'>
                <div className='logo-container '>
                    <img src={logo} className='w-20 rounded-full ' />
                </div>
                <div className='nav-links ' >
                    <nav>
                        <ul className='flex '>
                            <Link to='/'><li className='mx-8 hover:bg-white hover:text-black   active:bg-slate-400 p-5 rounded-lg'>Home</li></Link>
                            <Link to="/about"><li className='mx-8 hover:bg-white hover:text-black   active:bg-slate-400 p-5 rounded-lg'>About  us</li></Link>
                            <Link to='/contact'><li className='mx-8 hover:bg-white hover:text-black   active:bg-slate-400 p-5 rounded-lg'>Contanct Us</li></Link>
                            <Link to='/cart'><li className='hover:bg-white hover:text-black   active:bg-slate-400 p-5 rounded-lg'>cart</li></Link>
                        </ul>
                    </nav>
                </div>
                <div>
                    <button className='login-button border-2 bg-white text-black active:bg-slate-400  p-4 rounded-lg' onClick={() => {
                        setbuttonName("logOut")
                    }}>{buttonname}</button>
                </div>
            </div>
        </div>
    )
}

export default Header