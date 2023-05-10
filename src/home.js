import React from 'react'
import { userContext } from './context'
export default function Home() {
  let user = React.useContext(userContext)
  return (
    <div>
    <h1 style={{textAlign:"center"}}>Welcome</h1>
    <h1 style={{textAlign:"center"}}>{user}</h1>
    </div>
  )
}
