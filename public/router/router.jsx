import { createBrowserRouter } from "react-router";
import App from "../component/home/Home";
import Root from "../component/root";
import Home from "../component/home/Home";
import Apps from "../component/apps/apps";
import AppDetails from "../component/apps/appDetails";
import { Suspense } from "react";
import AppNotFound from "../component/common/appNotFound";
import Installation from "../component/installation/installation";
import PageNotFound from "../component/common/pageNotFound";


    const apps=fetch('/data.json').then(response=>response.json());

    const apps8 =fetch('/data8.json').then(response => response.json());

export const route= createBrowserRouter([{
    path:'/',
    Component:Root,
    errorElement:<PageNotFound></PageNotFound>,
    children:[
              {
                 path:'/',
                 index:true,
                 element:<Suspense fallback={<div className="flex justify-center items-center"><span className="loading loading-dots loading-xl"></span></div>}>
                             <Home apps8={apps8}></Home>
                         </Suspense>
           },
           {
                 path:'/apps',
                 element:<Suspense fallback={<div className="flex justify-center items-center"><span className="loading loading-dots loading-xl"></span></div>}>
                            <Apps apps={apps}></Apps>
                         </Suspense>
        }, 
      { 
                path:'/apps/details/:id',
                loader:()=>fetch('/data.json').then(res=>res.json()),
                Component:AppDetails,        
        },
        {
               path:'/installation',
                loader:()=>fetch('/data.json').then(res=>res.json()),
               Component:Installation,
        }
    ]
}])