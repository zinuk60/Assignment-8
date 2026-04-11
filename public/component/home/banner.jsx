import React from 'react';
import playStore from '../../../src/assets/playstore.png'
import appStore from '../../../src/assets/appstore.png'
import hero from '../../../src/assets/hero.png'
import { Link } from 'react-router';
const Banner = () => {
    return (
        <div>
       <div className='flex flex-col justify-center items-center '>
            <div className='flex flex-col justify-center items-center'>
            <p className='text-[#001931] font-bold text-4xl mt-20'>We Build </p>
            <p className='text-[#001931] font-bold text-4xl '>
                 <span className='gradient'> Productive </span>
              Apps</p>
           <p className='mt-5 text-[#627382] pl-10 pr-10'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and   more exciting. </p>
           <p className='text-[#627382] pl-10 pr-10'> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            <p className='flex mt-10 gap-5 mb-5'>
             <a href='https://play.google.com/store/apps'>
                <span className='h-[50px] w-[170px] btn flex  items-center gap-1 '>
                     <img className='h-[45px] w-[50px]' src={playStore} alt="" /> 
               Google Play 
                </span>
             </a>

             <a href='https://www.apple.com/app-store/'>
                <span className='h-[50px] w-[150px] btn flex items-center gap-2 p-0 '>
                <img className='h-[45px] w-[50px] ml-0' src={appStore} alt="" />  
                App Store </span>
             </a>
                </p>
           </div>
           <div> <img className='h-[150px] w-[300px] md:h-[350px] md:w-[700px] ' src={hero} alt="" /></div>
     
       </div>

           <div className='h-[500px] md:h-[300px] w-full bg-gradient-to-r from-[#632EE3] to-[#9F62F2] flex flex-col justify-center items-center text-white'>
            <p className='font-semibold text-4xl p-2 md:p-0'>Trusted by Millions, Built for You</p>
         <div className='flex flex-col md:flex-row gap-10 md:gap-20 mt-10 '>
               <div className='flex flex-col justify-center items-center '>
                <p className='text-[#E6DBFB] '>Total Downloads</p>
                <p className='font-bold text-4xl'>29.6M</p>
                <p className='text-[#E6DBFB] '>21% more than last month</p>
               </div>
            <div className='flex flex-col justify-center items-center  '>
                <p className='text-[#E6DBFB] '>Total Reviews</p>
                <p className='font-bold text-4xl'>906k</p>
                <p className='text-[#E6DBFB] '>46% more than last month</p>
            </div>
            <div className='flex flex-col justify-center items-center  '> 
                <p className='text-[#E6DBFB] '>Active Apps</p>
                <p className='font-bold text-4xl'>132+ </p>
                <p className='text-[#E6DBFB] '>31 more will launch</p>
            </div>
         </div>

            </div>   
    
           
        </div>
    );
};

export default Banner;