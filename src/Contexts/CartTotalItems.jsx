import { createContext } from "react";
import React from "react";
export const CartTotalItems = createContext();
export default function CartTotalItemsProvider(props) {
  const [CartItems, setCartTotalItems] = React.useState(0);
  let cartTotalProductsNumber = null;
  if (cartTotalProductsNumber == null || undefined) {
    cartTotalProductsNumber = 0;
  } else {
    cartTotalProductsNumber = window.localStorage.getItem(
      "cartTotalProductsNumber"
    );
  }
  const addItem = () => {
    setCartTotalItems(CartItems + 1);
     window.localStorage.setItem(
       "cartTotalProductsNumber",
       JSON.stringify(CartItems)
     );
  };
  const removeItem = () => {
    setCartTotalItems(CartItems - 1);
  };
  React.useEffect(() => {
    // window.localStorage.setItem(
    //   "cartTotalProductsNumber",
    //   JSON.stringify(CartItems)
    //   );
    }, [CartItems]);

  return (
    <CartTotalItems.Provider
      value={{
        addItem,
        removeItem,
        CartItems,
        cartTotalProductsNumber,
      }}
    >
      {props.children}
    </CartTotalItems.Provider>
  );
}
