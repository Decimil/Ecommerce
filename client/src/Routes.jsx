import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Profile from "./components/Profile";
import Checkout from "./scenes/checkout/Checkout";
import Confirmation from "./scenes/checkout/Confirmation";
import ItemDetails from "./scenes/itemDetails/ItemDetails";
import ContactUs from "./scenes/home/ContactUs";
import Home from "./scenes/home/Home";
import Category from "./Category/Category";

    
    const AppRoutes = () => {
      return (
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/profile"element={<Profile />} />
          <Route path='/contactus' element={<ContactUs />} />
          <Route path="/" element={<Home />} />
          <Route path="item/:itemId" element={<ItemDetails />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="checkout/success" element={<Confirmation />} />
          <Route path="/category/:id" element={<Category />} />
      
        </Routes>
      );
    };
    
export default AppRoutes;