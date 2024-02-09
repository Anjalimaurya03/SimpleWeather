import React from 'react'
import { UserAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({children}) => {
  const { currentUser } = UserAuth();

    if(!currentUser){
        return <Navigate to='/' replace={true} />
    }
  return children
}
