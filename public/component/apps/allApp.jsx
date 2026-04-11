import React, { use, useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { FaStar } from 'react-icons/fa';
import { MdOutlineFileDownload } from 'react-icons/md';
import { Link } from 'react-router';


const AllApp = ({apps}) => {
 
    const [search,setSearch]=useState('')
   const allAppData=use(apps)
   const handleChange=(e)=>{
       setSearch(e.target.value)
   }        
   const filterApps=()=>{
    let filterData=[];
    
    if(search.length!=0){
    filterData=allAppData.filter(app=>search.toLowerCase().includes(app.title.slice(0,search.length).toLowerCase()))
  
   }else{
    filterData=[...allAppData]
   }
   return filterData;
  }

  let display;
  if(search.length !=0 && filterApps().length==0 ){
    display=<>
        <div className='flex justify-center items-center'>
          <h1 className='mt-20 font-extrabold text-4xl text-blue-950'>apps not found</h1>
        </div>
    </>
  }
 
  
    return (
    <div>
     
     <div className=' flex flex-col md:flex-row justify-between items-center mt-20 gap-10'>
   <p  className='font-bold text-2xl '>({filterApps().length})Apps Found</p>
   <div className='flex justify-center  items-center  border-1 border-gray-400   max-w-[400px] h-[40px] text-2xl text-black '>
       <span>  <CiSearch></CiSearch></span>
         <input type="text" className=' focus:outline-none ' onChange={handleChange} placeholder='Search apps.........'/>
   </div>
    
    </div>
      {display}
     <div className='grid grid-cols-1 md:grid-cols-4 gap-20 mt-5 mb-20  '>
      {  
              filterApps().map(app=> 
                <Link key={app.id} to={`/apps/details/${app.id}`}>
                       <div  className="h-[400px] w-[300px] bg-white p-5 shadow-2xl">
                       <div className=''>
                  <img className='mx-auto h-[200] w-[200px]' src={app.image} alt="" />
                 </div>
                 <p className='text-xl text-[#001931] mt-8 h-[100px]'>{app.title} - {app.workOn}</p>
                 <div className='flex justify-between items-center'>
                  <span className='flex gap-3 pl-3 pr-3 rounded-md text-[#00D390] bg-[#F1F5E8] justify-center items-center'> <MdOutlineFileDownload></MdOutlineFileDownload> {app.size}</span>
                  <span className='flex gap-3 pl-3 pr-3 rounded-md text-[#FF8811] bg-[#FFF0E1] justify-center items-center'> <FaStar></FaStar> {app.ratingAvg}</span>
                  </div>
              </div>
                </Link>
              )
          }   
              </div>
   </div>

    
   
    );
};

export default AllApp;