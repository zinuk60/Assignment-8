import { Suspense } from "react";
import Banner from "./banner"
import App8 from "./app8";
import { Link } from "react-router";


function Home() {
  const apps =fetch('data8.json')
  .then(response => response.json());
  

  return (
    <>
    <div className="bg-[#F5F5F5]">
        <Banner></Banner>
    <div className="mt-20 flex flex-col justify-center items-center ">
      <p className="font-bold text-[#001931] text-3xl ">
        Tranding Apps
          
      </p>
      <p className="text-[#627382] text-[20px] mt-5">Explore All Trending Apps on the Market developed by us</p>
      <div>
    <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
      <App8 apps={apps}></App8>
    </Suspense>
          
      </div>
    </div>
   <div className="flex justify-center items-center">
       <span className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2]  text-[#E6DBFB] mb-20"> <Link to={'/apps'}>Show All</Link> </span>
   </div>
    </div>
  
    </>
  )
}

export default Home
