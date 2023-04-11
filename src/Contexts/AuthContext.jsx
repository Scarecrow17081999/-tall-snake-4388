import { createContext,useRef } from "react";
import React from "react";
import axios from "axios";
export const AuthContext = createContext();
export default function AuthContextProvider(props) {
   const [isAuthenticated, setIsAuthenticated] = React.useState(false);
   const [email, setEmail] = React.useState("");
   const [password, setPassword] = React.useState("");
   const [token, setToken] = React.useState("");
 const fetch = (email, password) => {
   axios
     .post("https://reqres.in/api/login", {
       email,
       password,
     })
     .then(function (response) {
      //  setIsAuthenticated(true);
       setToken(response.data.token);
      //  console.log(response.data);
     })
     .catch(function (error) {
       console.log(error);
      //  setIsAuthenticated(false);
     });
 };

  const login = () => {
     fetch(email, password);
     setIsAuthenticated(true);
  };
  const logout = () => {
    setIsAuthenticated(false);
  };
  return (
    <AuthContext.Provider value={{ login, logout, isAuthenticated }}>
      {props.children}
    </AuthContext.Provider>
  );
}
