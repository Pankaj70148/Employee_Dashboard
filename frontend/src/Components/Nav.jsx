import React from 'react'
import {Link, useNavigate} from 'react-router-dom'

export default function Nav() {
  const auth = localStorage.getItem("user")
 
  const navigate=  useNavigate()
  const logout= ()=>{
    localStorage.clear()
    navigate("/signup")
    
  }
  return (
    <div>
    
      {auth?<div className="circle circle-text">
        {JSON.parse(auth).Name[0]}
    </div>
      :false} 

<h2 className='logo'>DB</h2>

      {auth?
      <ul className='nav-ul'>
        <li>
            <Link to ="/"> Home</Link>
        </li>
        <li>
            <Link to ="/add"> add product</Link>
        </li>
        <li>
            <Link to ="/update"> update product</Link>
        </li>
         
        <li>
            <Link to ="/profile"> profile</Link>
        </li>
        <li> <Link  onClick={logout} to="/signup">logout ({JSON.parse(auth).Name})</Link></li>
        
        </ul>
        
        :         
        <ul className='nav-ul nav-right'>
        <li><Link to="/signup">signup</Link></li> <li> <Link to ="/login">Login</Link> </li>
        </ul>
}       
    </div>
  )
}
