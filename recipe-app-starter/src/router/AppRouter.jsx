import React from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRouter from "./PrivateRouter";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Login from "../pages/login/Login";
import Detail from "../pages/detail/Detail";
import Register from "../pages/register/Register";
import Header from "../components/header/Header";
import RecipeDetail from "../pages/recipe/RecipeDetail";

const AppRouter = () => {
  return (
    <>
    <Header/>
        <Routes>
      <Route path="/" element={<PrivateRouter />}>
        <Route path="" element={<Home />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/about" element={<PrivateRouter />}>
        <Route path="" element={<About />} />
      </Route>
      <Route path="/details" element={<PrivateRouter />}>
        <Route path="" element={<Detail />} />
        <Route path=":id" element={<RecipeDetail />} />
      </Route>
    </Routes>
    </>

  );
};

export default AppRouter;
