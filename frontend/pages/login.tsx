import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/client'
import GoogleButton from 'components/google-button'


export default function Page() {
  const [ session ] = useSession()
  console.log('this is the sessin', session)


  return <div className="container">
    <h1>Welcome Gonorrea</h1>
    {!session && <>
      Not signed in <br/>
      <GoogleButton onClick={(e) => { e.preventDefault(); signIn('google') }}>Sign in</GoogleButton>
    </>}
    {session && <>
      Signed in as {session.user.email} <br/>
      <GoogleButton onClick={() => signOut()}>Sign out</GoogleButton>
    </>}
  </div>
}