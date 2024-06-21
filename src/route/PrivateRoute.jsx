import React from 'react';
import { useContext } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    // console.log(location.pathname, location);
    if (loading) {
        return <div className='flex justify-center'>
            <span className="loading loading-spinner loading-lg"></span>
        </div>

    }
    if (user?.email) {
        return children;
    }
    else {
        return <Navigate to='/login'></Navigate>
    }


};

export default PrivateRoute;