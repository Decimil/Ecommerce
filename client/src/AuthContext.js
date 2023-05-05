import { createContext, useContext } from "react";
    
export const AuthContext = createContext({
  user: undefined,
  email: undefined,
  isLoading: false,
  setUser: () => {},
  setVerifiedEmail: () => {},
});

export const useAuthContext = () => useContext(AuthContext);