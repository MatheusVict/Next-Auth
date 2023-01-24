import { ReactNode, createContext } from "react";

type AuthContextType = {
  isAuthenticated: boolean;
}

interface AuthContextProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvier({children}: AuthContextProps)  {
  const isAuthenticated = false;

  return (
    <AuthContext.Provider value={{isAuthenticated}}>
      {children}
    </AuthContext.Provider>
  )
}