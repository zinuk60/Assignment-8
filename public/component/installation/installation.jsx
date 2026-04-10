import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import { getData } from '../common/DB';
import InstalledApp from './installedApp';

const Installation = () => {
     const appData=useLoaderData();

   const [sort,setSort]=useState('')

     const handleSort=(sortBy)=>{
        setSort(sortBy)
    
     }

  

     const filterApp=()=>{
        const storedData=getData();
        const filterData=appData.filter(app=>storedData.includes(app.id));
        let sortData;
        if(sort==='size'){
          sortData=filterData.sort((a,b)=>(a.size-b.size))

        }else if(sort==='ratting'){
          sortData=filterData.sort((a,b)=>(b.ratingAvg-a.ratingAvg))
        }else{
          return filterData
        }
        return sortData;
     }
    console.log(filterApp())
    return (
        <div  className="bg-[#F5F5F5] pb-10">
    <div className=" flex flex-col justify-center items-center ">
      <p className="font-bold text-[#001931] text-3xl mt-20 ">
        Your Installed Apps
          
      </p>
      <p className="text-[#627382] text-[18px] mt-5">Explore All Trending Apps on the Market developed by us</p>
      </div>
    
      <div className='flex flex-col md:flex-row justify-between items-center mt-20 gap-10 max-w-[800px] mx-auto'>
       <p  className='font-bold text-2xl '>({filterApp().length})Apps Found</p>
      <div className="dropdown">
   <div tabIndex={0} role="button" className="btn m-1">Sort by: {sort==='ratting'?'Ratting':'Size'}</div>
   <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
     <li onClick={()=>handleSort('size')}><a>Size</a></li>
     <li onClick={()=>handleSort('ratting')}><a>Ratting</a></li>
   </ul>
  </div>
        </div>
        <div>
         {
            filterApp().map(app=><InstalledApp app={app} ></InstalledApp>)
         }
        </div>
        </div>
    );
};

export default Installation;