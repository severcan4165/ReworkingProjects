import React from 'react'
import { useSelector } from 'react-redux'
import {Navigate, Outlet} from 'react-router-dom'
import Login from "../pages/login/Login"

const PrivateRouter = () => {
const {user} = useSelector(state=> state.user)
// console.log(email);
  return (
    <>
    {user ? <Outlet/>:< Navigate to ="/login" replace /> }
    </>
  )
}

export default PrivateRouter