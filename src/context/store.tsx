"use client";

import { createContext, useState } from "react";

export const AppContext = createContext({});

export const AppContextProvider = ({ children }) => {
  const [basket, setBasket] = useState([]);
  return (
    <AppContext.Provider value={{ basket, setBasket }}>
      {children}
    </AppContext.Provider>
  );
};
