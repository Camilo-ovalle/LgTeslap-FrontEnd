import { createContext, useContext, useEffect, useState } from "react";
import { loginRequest, logOutRequest, registerRequest } from "../api/auth.js";

export const AppContext = createContext();

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const logIn = async (user) => {
    try {
      const res = await loginRequest(user);
      console.table(res.data);
      setIsAuthenticated(true);
      setUser(res.data);
    } catch (error) {
      console.log(error);
      setUser(null);
      setIsAuthenticated(false);
    }
  };

  const singIn = async (user) => {
    try {
      const res = await registerRequest(user);
      console.table(res.data);
      setIsAuthenticated(true);
      setUser(res.data);
    } catch (error) {
      console.log(error);
      setUser(null);
      setIsAuthenticated(false);
    }
  };

  const logOut = () => {
    logOutRequest();
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AppContext.Provider
      value={{
        user,
        logIn,
        logOut,
        singIn,
        isAuthenticated,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
