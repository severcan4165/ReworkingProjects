import {Outlet, Navigate} from "react-router-dom"
import {useSelector} from "react-redux"

const PrivateRouter = () => {
    const {user} = useSelector();
  return (
    <>{user ? <Outlet/>:<Navigate to="/login"/>}</>
  )
}

export default PrivateRouter