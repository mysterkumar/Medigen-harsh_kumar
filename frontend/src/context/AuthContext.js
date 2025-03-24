import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [products, setProducts] = useState([]);

  const logout = () => {
    setToken(null);
    setProducts([]);
  };

  return (
    <AuthContext.Provider
      value={{ token, setToken, products, setProducts, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
