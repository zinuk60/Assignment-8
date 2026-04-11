import React from 'react';
import { FaStar } from 'react-icons/fa';
import { FiDownload } from 'react-icons/fi';
import { getData } from '../common/DB';

const InstalledApp = ({app}) => {
       const handleUnstall=(id)=>{
                    const storedData=getData();
                    
                    const filterData=storedData.filter(app=> app != id)
                     const data=JSON.stringify(filterData);
                    localStorage.setItem('installedApp',data);
                    console.log(getData())
    
    
         }
    return (
            <div className='flex flex-col md:flex-row justify-between items-center p-5 max-h-[800px]  max-w-[800px] mx-auto bg-white mt-5' >
                <div className='flex flex-col md:flex-row justify-center items-center'>
                    <div>
                        <img className='h-[50px] w-[50px] md:ml-3' src={app.image} alt="" />
                    </div>
                     
                    <div className='ml-5'>
                     <p className='mt-3 md:mt-0'>{app.title}:{app.workOn}</p>
                     <div className='flex gap-10 mt-3 md:mt-1'>
                        <span className='text-[12px] text-green-500 mt-2 flex items-center gap-1'><FiDownload></FiDownload> {app.downloads}</span>
                        <span className='text-[12px] text-orange-500 mt-2 flex items-center gap-1'><FaStar></FaStar> {app.ratingAvg}</span>
                        <span className='text-[12px] mt-2 '> {app.size} MB</span>
                     </div>
                    </div>
                </div>
                <div>
              <form action="">
                 <button className='btn bg-green-500 text-white md:mr-3 mt-3 md:mt-0' onClick={()=>handleUnstall(app.id)}>unstall</button>
              </form>
           </div>
         </div>
     
    );
};

export default InstalledApp;