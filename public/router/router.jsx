import { createBrowserRouter } from "react-router";
import App from "../component/home/Home";
import Root from "../component/root";
import Home from "../component/home/Home";
import Content from "../component/apps/apps";
import Apps from "../component/apps/apps";

export const route= createBrowserRouter([{
    path:'/',
    Component:Root,
    errorElement:<h1>page not found 404</h1>,
    children:[
        {
            path:'/',
            index:true,
            Component: Home
        },
        {
            path:'/apps',
            Component:Apps
        }
    ]
}])