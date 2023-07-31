import { Outlet } from 'react-router-dom';
import React from 'react';
import LoginPage  from '../pages/Login';
import AuthService from "../services/auth.service";

const PrivateRoute = () => {
    const user = AuthService.getCurrentUser();
    

    
  
    return  user !== null ? (
      <Outlet />
    ) : (
      <LoginPage />
    );
  };

  export default PrivateRoute;