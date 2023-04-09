import { createContext } from "react";
import React from "react";
export const AuthContext = createContext();
export default function AuthContextProvider(props) {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const login = () => {};
  const logout = () => {};
  return <AuthContext.Provider value={{login,logout,isAuthenticated}}>{props.children}</AuthContext.Provider>;
}
