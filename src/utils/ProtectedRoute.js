import React from 'react';
import {Outlet, Navigate} from "react-router-dom";
import { useSelector } from "react-redux";

export default function ProtectedRoute() {
    const user = useSelector((state) => state.auth.value);

    if(!user) {
      return <Navigate to="/" />
    }
  
    return (
      <div className="container">
        <Outlet />
      </div>
    )
}
