import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Addproduct = () => {
    const [Name,setName]= useState("")
    const [Price,setPrice]= useState("")
    const [Category,setCategory]= useState("")
    const [Company,setCompany]= useState("")
    const [Error,setError]= useState(false)
    console.log(!Name)
    const navigate= useNavigate()

    const Addproduct=async ()=>{
        if(!Name||!Price||!Category||!Company){
            setError(true)
            return false
        }
        console.log(Name,Price,Category,Company)
        const UserId= JSON.parse(localStorage.getItem("user"))._id
     
        const result= await fetch("http://localhost:5000/add-product",{
            method: "POST",
            body: JSON.stringify({Name,Price,Category,Company,UserId}),
            headers:{ "Content-Type":"application/json"
            
            }
          })
          const data=  await result.json()
          console.log(data)
          navigate("/")

    }

  return (
    <div className='product'>
      <h1>Add product</h1>

      <input type='text' placeholder='Enter name'className='inputbox' value={Name} onChange={(e)=>setName(e.target.value)}></input>{Error && !Name&&<span className='invalid-input'>enter valid name</span>}
      <input type='text' placeholder='Enter price'className='inputbox'value={Price} onChange={(e)=>setPrice(e.target.value)}></input>{Error && !Price&&<span className='invalid-input'>enter valid price</span>}
      <input type='text' placeholder='Enter category'className='inputbox'value={Category} onChange={(e)=>setCategory(e.target.value)}></input>{Error && !Category&&<span className='invalid-input'>enter valid category</span>}
      <input type='text' placeholder='Enter company'className='inputbox'value={Company} onChange={(e)=>setCompany(e.target.value)} ></input>{Error && !Company&&<span className='invalid-input'>enter valid company</span>}
      <button onClick={Addproduct}className='appButton'>addproduct</button>

    </div>
  )
}

export default Addproduct
