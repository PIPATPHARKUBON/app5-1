import React from 'react'
import { Link , useNavigate} from 'react-router-dom'

export default function Products() {
    let navigate = useNavigate()
  return (
    <div>
        <h1  style={{textAlign:"center"}}>This is My Product page.</h1>
        <Link to="/">Bacl to Homepage</Link>
        <button onClick={() => navigate("/")}>Redirect</button>
    </div>
  )
}
