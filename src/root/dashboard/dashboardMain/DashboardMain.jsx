import React from 'react';
import Sidebar from '../sidebar/Sidebar';
import { Outlet } from 'react-router-dom';
import './DashboardMain.css'


const DashboardMain = () => {
    return (
        <div className='dashboard'>
            <Sidebar></Sidebar>
            <Outlet></Outlet>
        </div>
    );
};

export default DashboardMain;