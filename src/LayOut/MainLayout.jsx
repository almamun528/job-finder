import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';

const MainLayOut = () => {
    return (
        <>

        <div className='max-w-7xl mx-auto'>
            <NavBar/>
           <Outlet></Outlet>
        </div>
        </>
    );
};

export default MainLayOut;