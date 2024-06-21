import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './DashboardMain.css'


const DashboardMain = () => {
    return (
        <div className='dashboard '>

            <div className='hidden lg:flex flex-col bg-[#615EFC] h-screen px-4 text-white '>
                <h2 className='text-3xl'>Dashboard</h2>
                <div className="divider divider-accent m-0"></div>
                <ul>
                    <li>
                        <NavLink className='px-2' to='/dashboard/profile'>Profile</NavLink>
                    </li>
                    <li>
                        <NavLink className='px-2' to='/dashboard/manage-products'>Manage Products</NavLink>
                    </li>
                    <li>
                        <NavLink className='px-2' to='/dashboard/add-product'>Add Products</NavLink>
                    </li>
                </ul>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default DashboardMain;