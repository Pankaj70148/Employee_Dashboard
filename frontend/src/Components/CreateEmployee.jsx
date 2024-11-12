import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CreateEmployee = () => {
    const [Name,setName]= useState("")

    const [Error,setError]= useState(false)

    const [Email,setEmail]= useState("")
    const [MobileNo,setMobileNo]= useState("")
    const [Destination,setDestination]= useState("")
    const [Gender,setGender]= useState("male")
    const [Course,setCourse]= useState("BSC")

    



    console.log(!Name)
    const navigate= useNavigate()

    const createEmployee=async ()=>{
        if(!Name||!Email||!MobileNo||!Destination||!Gender||!Course){
            setError(true)
            return false
        }
        console.log(Name,MobileNo,Destination,Gender,Course)
        const UserId= JSON.parse(localStorage.getItem("user"))._id
     
        const result= await fetch("http://localhost:5000/add-product",{
            method: "POST",
            body: JSON.stringify({Name,UserId,Email,MobileNo,Destination,Gender,Course}),
            headers:{ "Content-Type":"application/json"
            
            }
          })
          const data=  await result.json()
          console.log(data)
          navigate("/")

    }

  return (
    <div className='product'>
      <h1>Create Employee</h1>

     NAME <input type='text' placeholder='Enter name'className='inputbox' value={Name} onChange={(e)=>setName(e.target.value)}></input>{Error && !Name&&<span className='invalid-input'>enter valid name</span>}
      
      Email<input type='text' placeholder='Enter Email'className='inputbox' value={Email} onChange={(e)=>setEmail(e.target.value)}></input>{Error && !Email&&<span className='invalid-input'>enter valid name</span>}
     MobileNo <input type='text' placeholder='Enter MobileNo'className='inputbox' value={MobileNo} onChange={(e)=>setMobileNo(e.target.value)}></input>{Error && !MobileNo&&<span className='invalid-input'>enter valid name</span>}
      
     <label for="designation">Designation:</label>
      
      <select className='inputbox' name="designation" onChange={(e)=>setDestination(e.target.value)} required>
      <option value="" >Select an options</option>
      <option value="HR" >HR</option>
      <option value="Manager">Manager</option>
      <option value="Sales"  >Sales</option>
    </select>
    
    <label >Gender:</label>
    <input type="radio" id="male" name="gender" value="male" onChange={(e)=>setGender(e.target.value)} required/>
    <label for="male">M</label>
    <input type="radio" id="female" name="gender" value="female" onChange={(e)=>setGender(e.target.value)} required/>
    <label for="female">F</label>
    <br></br>

   

    
    <label >Course:</label>
    <input  type="checkbox" id="mca" name="course" value="mca" onChange={(e)=>setCourse(e.target.value)}/>
    <label for="mca">MCA</label>
    <input type="checkbox" id="bca" name="course" value="bca" onChange={(e)=>setCourse(e.target.value)}/>
    <label for="bca">BCA</label>
    <input type="checkbox" id="bsc" name="course" value="bsc" onChange={(e)=>setCourse(e.target.value)}/>
    <label for="bsc">BSC</label>
    <br></br>
    <label for="imgUpload">Img Upload:</label>
    <input type="file" id="imgUpload" name="imgUpload" accept="image/*"/>
    <br></br>
    

      
      <button onClick={createEmployee}className='appButton'>Submit</button>

    </div>
  )
}

export default CreateEmployee
