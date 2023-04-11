import React from "react";
import "./SearchPage.css";
import Navbar from "../Homepage/Navbar/Navbar";
import Footer from "./SearchPageFooter";
import SearchPageMain from "./SearchPageMain";
export default function SearchPage({ data }) {
  return (
    <>
      <Navbar />
      <SearchPageMain />
      <Footer />
    </>
  );
}
