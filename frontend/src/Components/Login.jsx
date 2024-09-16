
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Login= () => {

 
  const[Email ,setEmail]= useState("")
  const[Password,setPassword]= useState("")
   const navigate= useNavigate()

   useEffect(()=>{
    const auth=  localStorage.getItem("user")
    if(auth)
      navigate("/")
   },[])
  const collectData =async ()=>{
    console.log(Email,Password)
    let result= await fetch("http://localhost:5000/login",{
      method: "POST",
      body: JSON.stringify({Email,Password}),
      headers:{ "Content-Type":"application/json"
      
      }
    })
     result=  await result.json()
    console.log(result)
    if(result.auth){
        localStorage.setItem("user",JSON.stringify(result.user))
        localStorage.setItem("token",JSON.stringify(result.auth))
        navigate("/")
    }
    else{
      alert("please enter correct details")
    }
  
  }

  return (
    <div className='login'>
     <h1>Login</h1>
   
     <input className ="inputbox" type='text' value={Email} onChange={(e)=>
      setEmail(e.target.value)} placeholder='email'></input>
     <input className='inputbox' type='password' value={Password} onChange={(e)=>
      setPassword(e.target.value)} placeholder='password'></input>
     <button className='appButton' onClick={collectData} type='button'>Login</button>

     
    </div>
  )
}

export default Login
