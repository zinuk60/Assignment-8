import React, { use } from 'react';
import { FaStar } from 'react-icons/fa';
import { MdOutlineFileDownload } from 'react-icons/md';

const App8 = ({ apps8 }) => {
  const appData=use(apps8)
    console.log(appData)
 
    return (
        <div className='grid grid-cols-1 md:grid-cols-4 gap-20 mt-20 mb-20  '>
      {
        appData.map(app=> 
             <div key={app.id} className="h-[400px] w-[300px] bg-white p-5 shadow-2xl">
                 <div className=''>
            <img className='mx-auto max-h-[200] max-w-[200px]' src={app.image} alt="" />
           </div>
           <p className='text-xl text-[#001931] mt-8 h-[100px]'>{app.title} - {app.description}</p>
           <div className='flex justify-between items-center'>
            <span className='flex gap-3 pl-3 pr-3 rounded-md text-[#00D390] bg-[#F1F5E8] justify-center items-center'> <MdOutlineFileDownload></MdOutlineFileDownload> {app.size}</span>
            <span className='flex gap-3 pl-3 pr-3 rounded-md text-[#FF8811] bg-[#FFF0E1] justify-center items-center'> <FaStar></FaStar> {app.ratingAvg}</span>
            </div>
        </div>
        )
      }
        </div>
    );
};

export default App8;