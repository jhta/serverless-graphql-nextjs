

import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/client'

export default function Page() {
  const [ session ] = useSession()


  return <>
    {!session && <>
      Not signed in <br/>
      <button onClick={(e) => { e.preventDefault(); signIn() }}>Sign in</button>
    </>}
    {session && <>
      Signed in as {session.user.email} <br/>
      <button onClick={() => signOut()}>Sign out</button>
    </>}
  </>
}