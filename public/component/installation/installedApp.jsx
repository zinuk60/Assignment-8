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
            <div className='flex justify-between items-center h-[80px] max-w-[800px] mx-auto bg-white mt-5' >
                <div className='flex'>
                    <div>
                        <img className='h-[50px] w-[50px] ml-3' src={app.image} alt="" />
                    </div>
                     
                    <div className='ml-5'>
                     <p className=''>{app.title}:{app.workOn}</p>
                     <div className='flex gap-10'>
                        <span className='text-[12px] text-green-500 mt-2 flex items-center gap-1'><FiDownload></FiDownload> {app.downloads}</span>
                        <span className='text-[12px] text-orange-500 mt-2 flex items-center gap-1'><FaStar></FaStar> {app.ratingAvg}</span>
                        <span className='text-[12px] mt-2 '> {app.size} MB</span>
                     </div>
                    </div>
                </div>
                <div>
              <form action="">
                 <button className='btn bg-green-500 text-white mr-3' onClick={()=>handleUnstall(app.id)}>unstall</button>
              </form>
           </div>
         </div>
     
    );
};

export default InstalledApp;