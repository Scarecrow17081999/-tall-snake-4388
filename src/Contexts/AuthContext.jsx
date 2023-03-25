import { createContext } from "react";
import React from "react";
export const AuthContext = createContext();
export default function AuthContext(props) {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const Login = () => {};
  const Logout = () => {};
  return <AuthContext.Provider>{props.children}</AuthContext.Provider>;
}
