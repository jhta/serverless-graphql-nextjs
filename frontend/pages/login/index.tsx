// https://github.com/nextauthjs/next-auth/issues/591
import React from 'react'
// import { useRouter } from 'next/router'
import { signIn, useSession } from 'next-auth/client'
import GoogleButton from 'components/google-button'
import styles from './loginPage.module.css'

const LoginPage = () => {
  // const { query } = useRouter()
  const [ session ] = useSession()


  const handleLogin = () => {
    signIn('google', { callbackUrl: `/` })
  }

  return (
    <div className="container">
      <div className={styles.wrapper}>
        <div className={styles.block}>
          <div>
            <h1 className={styles.title}>Hey there! 👋 </h1>
            <p>Welcome to the best platform ever. </p>
          </div>
          <GoogleButton onClick={handleLogin}>Sign in</GoogleButton>
          {session && <>
            Signed in as {session.user.email} <br/>
          </>}
        </div>
      </div>
    </div>
  )
}

export default LoginPage