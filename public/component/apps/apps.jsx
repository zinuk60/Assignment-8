import React, { Suspense } from 'react';
import AllApp from './allApp';

const Apps = () => {
    const apps=fetch('data.json')
               .then(response=>response.json());
    return (
      <div className="bg-[#F5F5F5]">
    
    <div className=" flex flex-col justify-center items-center ">
      <p className="font-bold text-[#001931] text-3xl mt-20 ">
       Our All Applications
          
      </p>
      <p className="text-[#627382] text-[20px] mt-5">Explore All Apps on the Market developed by us. We code for Millions</p>
      <div>
    <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
      <AllApp apps={apps}></AllApp>
    </Suspense>
          
      </div>
    </div>

    </div>
    );
};

export default Apps;