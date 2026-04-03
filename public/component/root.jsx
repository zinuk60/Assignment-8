import React from 'react';
import Header from './common/Navber';
import { Outlet } from 'react-router';
import Footer from './common/footer';


const Root = () => {
    return (
        <div className='inter'>
          <Header></Header>
          <Outlet></Outlet>  
          <Footer></Footer>
        </div>
    );
};

export default Root;