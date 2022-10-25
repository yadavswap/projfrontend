import React from 'react';
import { BrowserRouter, Routes as Switch  , Route } from "react-router-dom";
import Home from './core/Home';
import Signin from './user/Signin';
import Signup from './user/Signup';
import AdminRoute from "./auth/helper/AdminRoutes";
// import PrivateRoute from "./auth/helper/PrivateRoutes";
// import UserDashBoard from './user/UserDashBoard';
import AdminDashBoard from './user/AdminDashBoard';


const AppRoute = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact element={<Home/>} />
        <Route path="/signin" exact element={<Signin/>} />
        <Route path="/signup" exact  element={<Signup/>} />
        {/* <PrivateRoute path="/user/dashboard" exact  element={UserDashBoard} /> */}
        {/* <AdminRoute path="/admin/dashboard" exact  element={<AdminDashBoard/>} /> */}

        <Route path="/admin/dashboard" exact  element={<AdminDashBoard/>} />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRoute;
