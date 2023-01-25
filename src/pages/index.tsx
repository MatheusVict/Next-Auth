import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { useForm } from 'react-hook-form'
import { useContext } from 'react'
import { AuthContext } from '@/context/AuthContext'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const { register, handleSubmit } = useForm();
  const {signIn} = useContext(AuthContext)

  async function handleSigIn(data: any) {
    await signIn(data)
    
  }

  return (
    <>
      <form onSubmit={handleSubmit(handleSigIn)}>
        <input type="email" 
        {...register('email')}
          name="email" id="email"
          autoComplete='email'
          placeholder='Email address'
        /><br />
        <input 
          {...register('password')}
          type="password"
          name="password"
          id="password"
        /><br />
        <button type="submit">Entrar</button>
      </form>
    </>
  )
}
