
import { BiSolidLike } from 'react-icons/bi';
import { FaStar } from 'react-icons/fa';
import { FiDownload } from 'react-icons/fi';
import { useLoaderData, useParams } from 'react-router';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';

const AppDetails = () => {
  
    const appData=useLoaderData();

    const {id}=useParams();
  const findData=appData.find(app=>id==app.id)


 


    return (
     <div className='flex flex-col gap-10 items-center md:ml-20 mt-10  '>
<div className='flex  gap-10 items-center md:ml-20 mt-10'>
           <div>
        <img className='h-[250px] w-[250px]' src={findData.image} alt="" />
       </div>
       <div>
             <p className='font-bold text-[32px] text-[#001931] '>{findData.title} : {findData.workOn}</p>
            <p className='text-gray-400'>Developed by <span className='gradient'>{findData.companyName}</span></p>
            <div className='border-t-2 border-gray-300 mt-5'></div>
            <div className='flex gap-20 mt-10 text-[#001931] '>
                <div>
                    <FiDownload className='text-[40px] text-green-500'></FiDownload>
                    <p className='text-gray-400'>Downloads</p>
                    <p className='text-[32px] font-bold'>8M</p>
                </div>
                <div>
                    <FaStar className='text-[40px] text-orange-300'></FaStar>
                    <p className='text-gray-400'>Average Ratings</p>
                    <p className='text-[32px] font-bold'>4.9</p>
                </div>
                <div>
                    <BiSolidLike className='text-[40px] text-blue-700'></BiSolidLike>
                    <p className='text-gray-400'>total Reviews</p>
                    <p className='text-[32px] font-bold'>54K</p>
                </div>
               
            </div>
            <button className='btn bg-green-500 text-white mb-20 '>Install Now [{findData.size} MB]</button>
            </div>
</div>
      
      <div>
        <BarChart data={findData.ratings} width={600} height={400} >
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
    );
};

export default AppDetails;