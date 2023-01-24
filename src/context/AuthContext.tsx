import { signInRequest } from "@/services/auth";
import { ReactNode, createContext, useState } from "react";
import { setCookie } from "nookies";
import Router from "next/router";

type AuthContextType = {
  isAuthenticated: boolean;
  user: UserDataType | null;
  signIn: (data: sigInData) => Promise<void>
}

type sigInData = {
  email: string;
  password: string;
}

type UserDataType = {
  name: string;
  email: string;
  avatarUrl: string;
}

interface AuthContextProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvier({children}: AuthContextProps)  {
  const [user, setUser] = useState<UserDataType | null>(null)

  const isAuthenticated = !!user;

  async function signIn({email, password}: sigInData) {
    //Lugar perfeito pra fazer a autenticação na API e trazer o token e salvar

    const {token, user} = await signInRequest({
      email,
      password
    });
    /**
     * Recebe 4 Parametros
     * 
     * 1° Contexto da requisição(Se a interação pelo server side se passa undefined)
     * 2° Nome do cookie que eu quero salvar
     * 3° O conteudo que vai ser salvo
     * 4° Opçoões(instalar tipagem da lib "cookie" e do proprio noocokie)
     */
    setCookie(undefined, 'nextauth.token', token, {
      maxAge: 60 * 60 * 1, //1 hour
    });

    setUser(user);

    Router.push('/dashboard');
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}