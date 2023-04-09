import React from 'react';
import { Routes, Switch,Route,Link } from 'react-router-dom';
import Homepage from '../Components/Homepage/Homapage';
import Cart from '../Components/Cart/Cart';
export default function Allroutes() {
  return (

    <Routes>
      {/* 
      <Route path="/men" element={<Home/>}/>
      <Route path="/women" element={<Home/>}/>
      <Route path="/searchPage" element={<Home/>}/>
    <Route path="/singleProductPage/:id" element={<Home/>}/> */}
    <Route path="/" element={<Homepage/>}/>
      <Route path="/cart" element={<Cart/>}/>
    </Routes>
  )
}
