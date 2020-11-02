import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/client'
import GoogleButton from 'components/google-button'

const LoginPage = () => {
  const [ session ] = useSession()

  return <div className="container">
    <div>
    <h1>Welcome Gonorrea</h1>
    {!session && <>
      Not signed in <br/>
      <GoogleButton onClick={(e) => { e.preventDefault(); signIn('google', { callbackUrl: '/' }) }}>Sign in</GoogleButton>
    </>}
    {session && <>
      Signed in as {session.user.email} <br/>
      <GoogleButton onClick={() => signOut()}>Sign out</GoogleButton>
    </>}
    </div>

  </div>
}

export default LoginPage