
import { BiSolidLike } from 'react-icons/bi';
import { FaStar } from 'react-icons/fa';
import { FiDownload } from 'react-icons/fi';
import {  useLoaderData, useParams } from 'react-router';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';
import { addData, getData } from '../common/DB';
import { toast, ToastContainer } from 'react-toastify';
import AppNotFound from '../common/appNotFound';

const AppDetails = () => {

    const appData=useLoaderData();
    
 
    const {id}=useParams();
  const findData=appData.find(app=>id==app.id)

  const handleInstall=()=>{
    
   addData(findData.id)
   toast('Installed')
  
   
  }

  let display;
   if(findData==null){
       display=<>
      <AppNotFound></AppNotFound>
       </>
   }else{
    display=<>
        <div className='flex flex-col gap-10 items-center md:ml-20 mt-10  '>
        
<div className='flex flex-col md:flex-row gap-10 items-center md:ml-20 mt-10'>
           <div>
        <img className='h-[250px] w-[250px]' src={findData.image} alt="" />
       </div>
       <div>
             <p className='font-bold text-[32px] text-[#001931] '>{findData.title} : {findData.workOn}</p>
            <p className='text-gray-400'>Developed by <span className='gradient'>{findData.companyName}</span></p>
            <div className='border-t-2 border-gray-300 mt-5'></div>
            <div className='flex flex-col md:flex-row gap-20 mt-10 text-[#001931] w-full justify-center items-center '>
                <div>
                    <FiDownload className='text-[40px] text-green-500'></FiDownload>
                    <p className='text-gray-400'>Downloads</p>
                    <p className='text-[32px] font-bold'>{findData.downloads}</p>
                </div>
                <div>
                    <FaStar className='text-[40px] text-orange-300'></FaStar>
                    <p className='text-gray-400'>Average Ratings</p>
                    <p className='text-[32px] font-bold'>{findData.ratingAvg}</p>
                </div>
                <div>
                    <BiSolidLike className='text-[40px] text-blue-700'></BiSolidLike>
                    <p className='text-gray-400'>total Reviews</p>
                    <p className='text-[32px] font-bold'>{findData.reviews}</p>
                </div>
               
            </div>
       <div >
          <form className='flex justify-center items-center md:justify-start ' action="">
               <button className={`btn bg-green-500 text-white mt-20  md:mt-3 mb-20 ${getData().includes(findData.id)?"cursor-not-allowed disabled:opacity-0":''}` } onClick={handleInstall}>{getData().includes(findData.id) ?  'installed':`Install Now (${findData.size} MB)`}</button>
               <ToastContainer></ToastContainer>
         </form> 
         
       </div>
            </div>
</div>
      
      <div>
        <BarChart data={findData.ratings} width={340} height={300} >
             <XAxis dataKey={'name'}></XAxis>
            <Bar dataKey={'count'} fill='orange' barSize={30}></Bar>
            <YAxis ></YAxis>
           
        </BarChart>
      </div>
       <div>
        <p className='font-bold font-black text-2xl mt-10'>Description</p>
        <p className='mt-3 p-10 text-gray-600'>{findData.description}</p>
   
       </div>
        </div>
    </>
   }
 


    return (
    <>
     {display}
    </>
    );
};

export default AppDetails;