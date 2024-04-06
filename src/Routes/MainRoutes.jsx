import React from 'react'
import { Routes , Route } from 'react-router-dom'
import Home from '../Components/Home'
import Login from '../Components/Login'
import PrivateRoute from './PrivateRoute'

function MainRoutes() {
  return (
    <>
        <Routes>
            <Route element={<PrivateRoute />}>
              <Route path='/' element={<Home />}/>
            </Route>
            <Route path='/login' element={<Login />} />
        </Routes>
    </>
  )
}

export default MainRoutes