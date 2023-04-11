import React, { useRef } from "react";
import "./LoginSignup.css";
import axios from "axios";

export default function LoginSignup() {
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
        setIsAuthenticated(true);
        setToken(response.data.token);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
        setIsAuthenticated(false);
      });
  };

  const login = () => {
    fetch(email, password);
  };
  const logout = () => {
    setIsAuthenticated(false);
  };
  return (
    <>
      <input
        placeholder="email"
        type="text"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />

      <input
        placeholder="password"
        type="text"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button onClick={login}>Login</button>
      <button onClick={logout}>Logout</button>
    </>
  );
}
