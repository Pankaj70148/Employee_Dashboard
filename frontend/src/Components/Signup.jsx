
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Signup = () => {

  const[Name ,setName]= useState("")
  const[Email ,setEmail]= useState("")
  const[Password,setPassword]= useState("")
   const[data,setData]= useState(true)

   const navigate= useNavigate()

   useEffect(()=>{
    const auth=  localStorage.getItem("user")
    if(auth)
      navigate("/")
   },[])
  const collectData =async ()=>{
    console.log(Name,Email,Password)
    let result= await fetch("http://localhost:5000/register",{
      method: "POST",
      body: JSON.stringify({Name,Email,Password}),
      headers:{ "Content-Type":"application/json"
      
      }
    })
    result=  await result.json()
    console.log("rsult.data===",result.data)
    if(result.data==undefined){
      
     localStorage.setItem("user",JSON.stringify(result.result))
     localStorage.setItem("token",JSON.stringify(result.auth))
    
       navigate("/")
    }
    else{

    alert("User exist or wrong details")
    }

     
  
  }

  return (
    <div className='register'>
     <h1>Register</h1>
  
     <input  className ="inputbox" type='text' value={Name} onChange={(e)=>
     setName(e.target.value)} placeholder='name' ></input>
     <input className ="inputbox" type='text' value={Email} onChange={(e)=>
      setEmail(e.target.value)} placeholder='email' ></input>
     <input className='inputbox' type='password' value={Password} onChange={(e)=>
      setPassword(e.target.value)} placeholder='password' ></input>
     <button className='appButton' onClick={collectData} type='button'>Signup</button>
    

     
    </div>
  )
}

export default Signup
