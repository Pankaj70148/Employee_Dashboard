import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Addproduct = () => {
    const [Name,setName]= useState("")

    const [Error,setError]= useState(false)

    const [Email,setEmail]= useState("")
    const [MobileNo,setMobileNo]= useState("")
    const [Destination,setDestination]= useState("Sales")
    const [Gender,setGender]= useState("male")
    const [Course,setCourse]= useState("BSC")

    



    console.log(!Name)
    const navigate= useNavigate()

    const Addproduct=async ()=>{
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
      
      <select className='inputbox' name="designation" required>
      <option value={Destination} >HR</option>
      <option value={Destination}>Manager</option>
      <option value={Destination}  >Sales</option>
    </select>
    
    <label >Gender:</label>
    <input type="radio" id="male" name="gender" value={Gender} required/>
    <label for="male">M</label>
    <input type="radio" id="female" name="gender" value={Gender} required/>
    <label for="female">F</label>
    <br></br>

   

    
    <label >Course:</label>
    <input  type="checkbox" id="mca" name="course" value={Course}/>
    <label for="mca">MCA</label>
    <input type="checkbox" id="bca" name="course" value={Course}/>
    <label for="bca">BCA</label>
    <input type="checkbox" id="bsc" name="course" value={Course}/>
    <label for="bsc">BSC</label>
    <br></br>
    <label for="imgUpload">Img Upload:</label>
    <input type="file" id="imgUpload" name="imgUpload" accept="image/*"/>
    <br></br>
    

      {/* <input type='text' placeholder='Enter Gender'className='inputbox' value={Gender} onChange={(e)=>setGender(e.target.value)}></input>{Error && !Gender&&<span className='invalid-input'>enter valid name</span>}
      <input type='text' placeholder='Enter Course'className='inputbox' value={Course} onChange={(e)=>setCourse(e.target.value)}></input>{Error && !Course&&<span className='invalid-input'>enter valid name</span>} */}

      <button onClick={Addproduct}className='appButton'>Submit</button>

    </div>
  )
}

export default Addproduct
