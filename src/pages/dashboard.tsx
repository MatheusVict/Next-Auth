import { AuthContext } from '@/context/AuthContext'
import { api } from '@/services/api'
import { getAPIClient } from '@/services/axios';
import { GetServerSideProps } from 'next'
import { parseCookies } from "nookies";
import React, { useContext, useEffect } from 'react'

const DashBoard = () => {
  const {user} = useContext(AuthContext)

  useEffect(() => {
    // api.get('/users');
  }, [])

  return (
    <div>
      <h1>Imagem:</h1>
      <img src={user?.avatarUrl} />
    </div>
  )
}

export default DashBoard;

// Valida se o usuário está autenticado
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const apiCLient = getAPIClient(ctx); 

  /*
   Na hora de buscar os cookies ela vai saber de onde buscar
  
  */

  const {['nextauth.token']: token} = parseCookies(ctx);

  // O usuário não vê nem o layout da página
  if(!token) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  await apiCLient.get('/')
  
  return {
    props: {}
  }
}