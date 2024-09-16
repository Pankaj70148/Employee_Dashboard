import React, { useEffect, useState } from 'react'
import {useNavigate, useParams} from 'react-router-dom'
const UpdateProduct = () => {
    const [Name,setName]= useState("")
    const [Price,setPrice]= useState("")
    const [Category,setCategory]= useState("")
    const [Company,setCompany]= useState("")
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
        setPrice(data.Price)
        setCategory(data.Category)
        setCompany(data.Company)
      }
    

    const updateProduct=async ()=>{
        // if(!Name||!Price||!Category||!Company){
        //     setError(true)
        //     return false
        // }
        console.log(Name,Price,Category,Company)
        // const UserId= JSON.parse(localStorage.getItem("user"))._id
     
        const result= await fetch(`http://localhost:5000/product/${params.id}`,{
             method: "PUT",
           body: JSON.stringify({Name,Price,Category,Company}),
          headers:{ "Content-Type":"application/json"
            
            }
           })
           const data=  await result.json()
          console.log(data)
          navigate("/")

    }

  return (
    <div className='product'>
      <h1>Update Product</h1>

      <input type='text' placeholder='Enter name'className='inputbox' value={Name} onChange={(e)=>setName(e.target.value)}></input>
      <input type='text' placeholder='Enter price'className='inputbox'value={Price} onChange={(e)=>setPrice(e.target.value)}></input>
      <input type='text' placeholder='Enter category'className='inputbox'value={Category} onChange={(e)=>setCategory(e.target.value)}></input>
      <input type='text' placeholder='Enter company'className='inputbox'value={Company} onChange={(e)=>setCompany(e.target.value)} ></input>
      <button onClick={updateProduct}className='appButton'>Update Product</button>

    </div>
  )
}

export default UpdateProduct
