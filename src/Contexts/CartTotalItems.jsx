import { createContext, useRef } from "react";
import React from "react";
export const CartTotalItems = createContext();
export default function CartTotalItemsProvider(props) {
  const [CartItems, setCartTotalItems] = React.useState(0);
  let CartData = useRef();

  CartData.current = JSON.parse(window.localStorage.getItem("cartData")) || [];

  const addItem = (singleProduct) => {
    setCartTotalItems(CartItems + 1);

    window.localStorage.setItem(
      "cartData",
      JSON.stringify([...CartData.current, singleProduct])
    );

   
  };
  const removeItem = () => {
    setCartTotalItems(CartItems - 1);

  };


  return (
    <CartTotalItems.Provider
      value={{
        addItem,
        removeItem,
        CartItems,
        CartData,
      }}
    >
      {props.children}
    </CartTotalItems.Provider>
  );
}
