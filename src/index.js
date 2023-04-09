import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./Contexts/AuthContext";
import { StyledEngineProvider } from "@mui/material";
import DataContext from "./Contexts/DataContext";
// 1. import `ChakraProvider` component
// import { ChakraProvider } from '@chakra-ui/react'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <StyledEngineProvider>
      <AuthContextProvider>
        <DataContext>
          <App />
        </DataContext>
      </AuthContextProvider>
    </StyledEngineProvider>
  </BrowserRouter>
);
