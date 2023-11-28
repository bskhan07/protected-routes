import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ isAuth, children }) => {
    if (isAuth) {
        return children;
    }
    return <Navigate to={"/login"} />
}

export default ProtectedRoute