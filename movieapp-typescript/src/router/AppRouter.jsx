import { Routes, Route } from "react-router-dom";
import Details from "../pages/Details";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/details/:id" element={<PrivateRouter />}>
        <Route path="" element={<Details />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
