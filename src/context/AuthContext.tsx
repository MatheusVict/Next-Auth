import { signInRequest } from "@/services/auth";
import { ReactNode, createContext } from "react";

type AuthContextType = {
  isAuthenticated: boolean;
}

type sigInData = {
  email: string;
  password: string;
}

interface AuthContextProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvier({children}: AuthContextProps)  {
  const isAuthenticated = false;

  async function signIn({email, password}: sigInData) {
    //Lugar perfeito pra fazer a autenticação na API e trazer o token e salvar

    const {token, user} = await signInRequest({
      email,
      password
    })
  }

  return (
    <AuthContext.Provider value={{isAuthenticated}}>
      {children}
    </AuthContext.Provider>
  )
}