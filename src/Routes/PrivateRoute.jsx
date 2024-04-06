import React, { useState } from 'react'
import {Outlet , Navigate} from "react-router-dom"

function PrivateRoute() {
    const [isLogIn, setIsLogIn] = useState(localStorage.getItem("isLogin") || false);
  return (
    <div>
        {isLogIn ? <Outlet /> : <Navigate to={'/login'} />}
    </div>
  )
}

export default PrivateRoute