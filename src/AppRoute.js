import React from 'react';
import { BrowserRouter, Routes as Switch  , Route } from "react-router-dom";
import Home from './core/Home';
import Signin from './user/Signin';
import Signup from './user/Signup';
import AdminRoute from "./auth/helper/AdminRoutes";
// import PrivateRoute from "./auth/helper/PrivateRoutes";
// import UserDashBoard from './user/UserDashBoard';
import AdminDashBoard from './user/AdminDashBoard';
import AddCategory from './admin/AddCategory';
import ManageCategories from './admin/ManageCategories';
import AddProduct from './admin/AddProduct';


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
        <Route path="/admin/create/category" exact  element={<AddCategory/>} />
        <Route path="/admin/categories" exact  element={<ManageCategories/>} />
        <Route path="/admin/create/product" exact  element={<AddProduct/>} />

      </Switch>
    </BrowserRouter>
  );
};

export default AppRoute;
