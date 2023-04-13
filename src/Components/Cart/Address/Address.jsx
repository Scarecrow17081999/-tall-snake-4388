import React from 'react'
import './Address.css'
import CartContainerMainLeftComponent from './CartContainerMainLeftComponent'
import AddressNavBar from './AddressNavBar'

import SecurityIcon from "@mui/icons-material/Security";
export default function Address() {
  return (
    <div id="cartNavBarParent">
     
      <AddressNavBar/>
      <div id="addresscartContainerMain">
        
        <CartContainerMainLeftComponent/>
        <div id="addresscartContainerMainRight">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              position: "sticky",
              top: "155px",
              textAlign: "start",
            }}
          >
            <SecurityIcon style={{ marginRight: "1rem" }} />
            <p>
              Safe and secure payments. Easy returns. 100% Authentic products.
            </p>
          </div>
        </div>
    
      </div>
  
    </div>
  );
}

