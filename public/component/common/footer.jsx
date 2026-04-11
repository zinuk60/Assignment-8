import React from 'react';
import { SlSocialFacebook, SlSocialInstagram, SlSocialLinkedin } from 'react-icons/sl';
import { TiSocialLinkedinCircular } from 'react-icons/ti';
import { Link } from 'react-router';
import image from '../../../src/assets/logo.png'

const Footer = () => {
    return (
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
    );
};

export default Footer;