import '@/styles/globals.css'
import styles from '@/styles/Home.module.css'
import { SessionProvider } from "next-auth/react"
import Home from '.'
export default function App({ Component, pageProps: {session, ...pageProps}, }) {
  return (
    <> 
    <SessionProvider session={session}>
  <Component {...pageProps} />
  </SessionProvider>
  </>
  )
}
