import React, { useContext } from 'react'
import { Outlet, Navigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const PrivateRoute = ({ element: Component, ...rest }) => {
    // const isLogin = true;

    const [dataUser, dispatch] = useContext(UserContext);

    console.log(dataUser.isLogin);
    return dataUser.isLogin ? <Outlet /> : <Navigate to='/' />
};

export default PrivateRoute; 