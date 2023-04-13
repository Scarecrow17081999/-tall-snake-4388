import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../Components/Homepage/Homapage";
import Singleproductpage from "../Components/Singleproductpage/Singleproductpage";
import Cart from "../Components/Cart/Cart";
import Men from "../Components/Men/Men";
import SearchPage from "../Components/Searchpage/SearchPage";
import Women from "../Components/Women/Women";
import CheckOut from "../Components/Cart/CheckOut/CheckOut";
import Address from "../Components/Cart/Address/Address";
export default function Allroutes() {
  return (
    <Routes>
      <Route exact path="/" element={<Homepage />} />
      <Route path="/men" element={<Men />} />
      <Route path="/women" element={<Women />} />
      <Route exact path="/searchpage" element={<SearchPage />} />
      <Route
        exact
        path="/singleproductpage/:id"
        element={<Singleproductpage />}
      />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<CheckOut />} />
      <Route path="/address" element={<Address />} />
    </Routes>
  );
}
