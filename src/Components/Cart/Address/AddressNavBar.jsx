import React from 'react'
import { AccountMenu } from "../Cart";
import { Link } from "react-router-dom";
export default function AddressNavBar() {
  return (
    <div
      id="cartNavBarFullWidth"
      style={{ position: "sticky", top: 0, zIndex: "999" }}
    >
      <div id="cartNavBar">
        <Link style={{ height: "100%" }} to="/">
          <img
            style={{ height: "100%" }}
            src="http://www.pngimagesfree.com/LOGO/T/Tata-CLiQ/Tata-cliq-logo-PNG-Black-and-White.png"
            alt=""
          />
        </Link>
        <AccountMenu />
      </div>
    </div>
  );
}
