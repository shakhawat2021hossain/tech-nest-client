import { Link, NavLink } from 'react-router-dom';
import './Header.css'
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import DashboardMain from '../../root/dashboard/dashboardMain/DashboardMain';
const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const [singleUser, setSingleUser] = useState({});
    useEffect(() =>{
        fetch(`https://laptop-shop-server-vert.vercel.app/users/${user?.email}`)
        .then(res => res.json())
        .then(data => setSingleUser(data))
    },[])
    // console.log(user);
    return (
        <div className="header">
            <Link to='/' className="logo">Tech Nest</Link>
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/products'>Products</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
                {
                    user?.emailVerified ? <>
                        <NavLink to='/dashboard'>Dashboard</NavLink>
                        <a onClick={logOut}>Sign Out</a>
                        <span>{singleUser?.name}</span>
                        {/* <Link to='/dashboard'>
                            <img className='profile-pic' src={singleUser?.img} alt={singleUser?.name} />

                        </Link> */}
                    </> :
                        <>
                            <NavLink to='/login'>Login</NavLink>
                            <NavLink to='/register'>Register</NavLink>

                        </>
                }
            </nav>
        </div>
    );
};

export default Header;