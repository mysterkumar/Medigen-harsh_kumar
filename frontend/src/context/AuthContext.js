import { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [products, setProducts] = useState([]);

  return (
    <AuthContext.Provider value={{ token, setToken, products, setProducts }}>
      {children}
    </AuthContext.Provider>
  );
};
