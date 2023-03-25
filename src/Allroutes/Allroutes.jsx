import React from 'react';
import { Routes, Switch,Route,Link } from 'react-router-dom';
import { Home } from '../Imports/Home';

export default function Allroutes() {
  return (

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/men" element={<Home/>}/>
      <Route path="/women" element={<Home/>}/>
      <Route path="/searchPage" element={<Home/>}/>
      <Route path="/singleProductPage/:id" element={<Home/>}/>
    </Routes>
  )
}
