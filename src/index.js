import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./Contexts/AuthContext";
import { StyledEngineProvider } from "@mui/material";
import DataContext from "./Contexts/DataContext";
import CartTotalItemsProvider from "./Contexts/CartTotalItems";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <StyledEngineProvider>
      <AuthContextProvider>
        <CartTotalItemsProvider>
          <DataContext>
            <App />
          </DataContext>
        </CartTotalItemsProvider>
      </AuthContextProvider>
    </StyledEngineProvider>
  </BrowserRouter>
);
