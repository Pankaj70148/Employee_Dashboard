import React, { useEffect, useState } from 'react'
import {useNavigate, useParams} from 'react-router-dom'
const UpdateProduct = () => {
    const [Name,setName]= useState("")



    const [Email,setEmail]= useState("")
    const [MobileNo,setMobileNo]= useState("")
    const [Destination,setDestination]= useState("")
    const [Gender,setGender]= useState("")
    const [Course,setCourse]= useState("")


    const params= useParams()
    const navigate= useNavigate()
    useEffect(()=>{
    
        getProductDetails();
    },[])

      const getProductDetails=async()=>{
        console.warn(params)
        
       let result= await fetch(`http://localhost:5000/product/${params.id}`)
        let data=  await result.json()   
         setName(data.Name)


        setEmail(data.Email)
        setMobileNo(data.MobileNo)
        setDestination(data.Destination)
        setGender(data.Gender)
        setCourse(data.Course)
      }
    

    const updateProduct=async ()=>{
       
        console.log(Name,Email,MobileNo)
      
     
        const result= await fetch(`http://localhost:5000/product/${params.id}`,{
             method: "PUT",
           body: JSON.stringify({Name,Email,MobileNo,Destination,Gender,Course}),
          headers:{ "Content-Type":"application/json"
            
            }
           })
           const data=  await result.json()
          console.log(data)
          navigate("/")

    }

  return (
    <div className='product'>
      <h1>Update Employee</h1>

     Name <input type='text' placeholder='Enter name'className='inputbox' value={Name} onChange={(e)=>setName(e.target.value)}></input>
     
     Email <input type='text' placeholder='Enter Email'className='inputbox' value={Email} onChange={(e)=>setEmail(e.target.value)}></input>
     MobileNo <input type='text' placeholder='Enter MobileNo'className='inputbox'value={MobileNo} onChange={(e)=>setMobileNo(e.target.value)}></input>

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
    
      
      <button onClick={updateProduct}className='appButton'>Update</button>

    </div>
  )
}

export default UpdateProduct
