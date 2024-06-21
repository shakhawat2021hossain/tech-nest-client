import { Link, NavLink } from 'react-router-dom';
import './Header.css'
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log("User signed out successfully.");
            }).catch((error) => {
                console.error("Error signing out:", error);
            });
    }

    const menu = <>
        <NavLink className='mr-4 text-white px-4 py-1 text-lg' to='/'>Home</NavLink>
        <NavLink className='mr-4 text-white px-4 py-1 text-lg' to='/products'>Products</NavLink>
        <NavLink className='mr-4 text-white px-4 py-1 text-lg' to='/contact'>Contact</NavLink>
    </>
    return (
        <div className="navbar bg-[#615EFC]">
            <div className="navbar-start">
                <div className="dropdown mr-2">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#615EFC] rounded-box w-52">
                        {menu}
                    </ul>
                </div>
                <Link to='/' className="logo">Tech Nest</Link>

            </div>
            <div className="navbar-center hidden lg:flex justify-center items-center">
                <ul className="menu menu-horizontal">
                    {menu}
                </ul>
            </div>

            <div className="navbar-end">
                <div className="dropdown dropdown-left">
                    <div tabIndex={0} role="button" className="mr-4 btn btn-ghost lg:hidden">
                        <img className="rounded-full w-10" src={user?.photoURL ? user?.photoURL : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} />

                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#d7d6ff] rounded-box w-52">
                        {
                            user ? <>
                                <NavLink className='text-black px-4 py-1 text-lg' to='/dashboard/profile'>Profile</NavLink>
                                <NavLink className='text-black px-4 py-1 text-lg' to='/dashboard/manage-products'>Manage Products</NavLink>
                                <NavLink className='text-black px-4 py-1 text-lg' to='/dashboard/add-product'>Add Products</NavLink>

                                <a className='text-black px-4 py-1 text-lg' onClick={handleLogOut}>Sign Out</a>
                            </> :
                                <NavLink className='text-black px-4 py-1 text-lg' to='/login'>Login</NavLink>
                        }
                    </ul>
                </div>

                <div className='hidden lg:flex'>
                    <div className="w-10">
                        <Link to='/dashboard/profile'>
                            <img className="rounded-full" src={user?.photoURL ? user?.photoURL : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} />
                        </Link>
                    </div>

                    {
                        user ? <>
                            <NavLink className='text-white px-4 py-1 text-lg' to='/dashboard'>Dashboard</NavLink>

                            <a className='text-white px-4 py-1 text-lg' onClick={handleLogOut}>Sign Out</a>
                        </> :
                            <NavLink className='text-white px-4 py-1 text-lg' to='/login'>Login</NavLink>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;

