import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
function ProtectedRoutes({children}) {
    let status = useSelector((store)=>{
        return store.loginReducer.status;
    })
    if(status === "in"){
        return children;
    }
    else{
        return <Navigate to='/signuplogin'/>
    }
}

export default ProtectedRoutes;