import React from 'react';
import { useContext } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user} = useContext(AuthContext);
    if(user?.emailVerified){
        return children;
    }
    else{
        return <Navigate to='/login'></Navigate>
    }

 
};

export default PrivateRoute;