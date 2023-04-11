import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Homepage from '../Components/Homepage/Homapage';
import Cart from '../Components/Cart/Cart';
import Men from '../Components/Men/Men';
// import SearchPage from '../Components/Searchpage/SearchPage';
import Women from '../Components/Women/Women';
export default function Allroutes() {
  return (

    <Routes>   
      <Route path="/men" element={<Men/>}/>
      <Route path="/women" element={<Women/>}/>
      {/* <Route path="/searchPage" element={<SearchPage/>}/> */}
    {/* <Route path="/singleProductPage/:id" element={<Home/>}/> */}
    <Route exact path="/" element={<Homepage/>}/>
      <Route path="/cart" element={<Cart/>}/>
    </Routes>
  )
}
