import React from 'react'
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const user =false;
  return user ? children : <Navigate to={'/login'}/>
}

export default PrivateRoutes