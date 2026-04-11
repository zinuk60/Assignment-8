import React from 'react';
import { Link, NavLink } from 'react-router';
import '../style.css'
import image from '../../../src/assets/logo.png'
import { FaGithub } from 'react-icons/fa';
const Navber = () => {

    return (
        <div>
          
    <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
     <li><NavLink to={'/'}>Home</NavLink></li>
      <li>
    <NavLink to={'/apps'}>Apps</NavLink>
      </li>
      <li><NavLink to={'/installation'}>Installation</NavLink></li>
      </ul>
    </div>
    <a className="btn-ghost text-xl flex justify-center items-center md:ml-10" href='/'><img className='h-[50px] w-[50px]' src={image} alt="" /> <span className='gradient '>AppZone.Io</span></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><NavLink to={'/'}>Home</NavLink></li>
      <li>
    <NavLink to={'/apps'}>Apps</NavLink>
      </li>
      <li><NavLink to={'/installation'}>Installation</NavLink></li>
    </ul>
  </div>
  <div className="navbar-end">
    
    <a href='https://github.com/zinuk60' className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white md:mr-10"> <FaGithub></FaGithub> Contribute</a>
  </div>
</div>

        </div>
    );
};

export default Navber;