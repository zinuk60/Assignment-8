import React from 'react';

import image from '../../../src/assets/logo.png'
import { FaGithub } from 'react-icons/fa';
import errorImg from '../../../src/assets/error-404.png';
import { Link, NavLink, useNavigate } from 'react-router';
import { SlSocialFacebook, SlSocialInstagram, SlSocialLinkedin } from 'react-icons/sl';

const PageNotFound = () => {
    const navigate=useNavigate();
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

            <div  className='flex flex-col justify-center items-center h-[600px]'>
            <img className='max-w-[340px] h-auto' src={errorImg} alt="Page Not Found" />
               <div className=" flex flex-col justify-center items-center ">
      <p className="font-bold text-[#001931] text-3xl mt-5 ">
           Oops, page not found!
          
      </p>
      <p className="text-[#627382] text-[18px] mt-5">The page you are looking for is not available.</p>
      </div>
        <Link  className='btn mt-10 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white font-bold' onClick={()=>navigate(-1)}>Go Back</Link>
        </div>

         <div className='max-h-[500px] max-w-full bg-[#001931] text-white '>
           <div className='flex flex-col md:flex-row justify-between items-center '>
            <div>
            <a className="btn-ghost text-xl flex justify-center items-center mb-10 md:ml-10" href='/'><img className='h-[50px] w-[50px]' src={image} alt="" /> <span className='font-bold'>AppZone.Io</span></a>
            </div>
            <div className='flex gap-5 text-2xl  '>
                <Link className='hover:text-amber-100'>about </Link>
                <Link className='hover:text-amber-100'>Report</Link>
                <Link className='hover:text-amber-100'>contract</Link>
               
            </div>
            <div className='text-2xl mt-15 mr-10 '>
                <p>Connect with us</p>
              <div className='flex gap-10 mt-10 justify-center items-center'>
               <Link>  <SlSocialFacebook></SlSocialFacebook></Link>
              <Link> <SlSocialInstagram></SlSocialInstagram></Link>
              <Link> <SlSocialLinkedin></SlSocialLinkedin></Link>
              
              </div>
            </div>
           </div>
           <div className='flex justify-center items-center mt-20  text-[#E6DBFB]'>
            <p className='mb-10'>Copyright © 2025 - All right reserved</p>
           </div>
        </div>
        </div>
        
    );
};

export default PageNotFound;