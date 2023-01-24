import { AuthProvier } from '@/context/AuthContext'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvier>
      <Component {...pageProps} />
    </AuthProvier>
  
  )
}
