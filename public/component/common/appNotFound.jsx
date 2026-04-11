import React from 'react';
import appError from '../../../src/assets/App-Error.png'
import { Link, useNavigate } from 'react-router';
const AppNotFound = () => {
    const navigate=useNavigate()
    return (
        <div>
              <div  className='flex flex-col justify-center items-center h-[600px]'>
            <img className='max-w-[340px] h-auto' src={appError} alt="Page Not Found" />
               <div className=" flex flex-col justify-center items-center ">
      <p className="font-bold text-[#001931] text-3xl mt-5 ">
          OPPS!! APP NOT FOUND
          
      </p>
      <p className="text-[#627382] text-[18px] mt-5">The App you are requesting is not found on our system.  please try another apps</p>
      </div>
        <Link  className='btn mt-10 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white font-bold' onClick={()=>navigate(-1)}>Go Back</Link>
        </div>

        </div>
    );
};

export default AppNotFound;