import React, { use, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { MdOutlineFileDownload } from 'react-icons/md';


const AllApp = ({apps}) => {
    const [search,setSearch]=useState('')
   const allAppData=use(apps)
   const handleChange=(e)=>{
       setSearch(e.target.value)
   }        
   const filterApps=()=>{
    let filterData=[];
    if(search.length!=0){
    filterData=allAppData.filter(app=>search.includes(app.title.slice(0,search.length)))
   }else{
    filterData=[...allAppData]
   }
   return filterData;
}
    return (
   <div>

     <div className='flex flex-col md:flex-row justify-between items-center mt-20 gap-10'>
   <p  className='font-bold text-2xl '>({filterApps().length})Apps Found</p>
        <input type="text" className='border-1 border-gray-400 w-[300px] h-[40px] focus:outline-none p-5 text-2xl text-black ' onChange={handleChange} placeholder='Search apps.........'/>
    
    </div>

     <div className='grid grid-cols-1 md:grid-cols-4 gap-20 mt-5 mb-20  '>
      {  
              filterApps().map(app=> 
                   <div key={app.id} className="h-[400px] w-[300px] bg-white p-5 shadow-2xl">
                       <div className=''>
                  <img className='mx-auto h-[200] w-[200px]' src={app.image} alt="" />
                 </div>
                 <p className='text-xl text-[#001931] mt-4 mb-4'>{app.title} - {app.description}</p>
                 <div className='flex justify-between items-center'>
                  <span className='flex gap-3 pl-3 pr-3 rounded-md text-[#00D390] bg-[#F1F5E8] justify-center items-center'> <MdOutlineFileDownload></MdOutlineFileDownload> {app.size}</span>
                  <span className='flex gap-3 pl-3 pr-3 rounded-md text-[#FF8811] bg-[#FFF0E1] justify-center items-center'> <FaStar></FaStar> {app.ratingAvg}</span>
                  </div>
              </div>
              )
          }   
              </div>
   </div>

    
   
    );
};

export default AllApp;