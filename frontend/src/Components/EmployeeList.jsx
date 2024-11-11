import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
const EmployeeList = () => {
   

    const [products,setProducts]= useState([])

   
    useEffect(()=>{
     getProduct()
    },[])

    const getProduct=async()=>{
    const result= await fetch("http://localhost:5000/products",{
      headers:{
        authorization:JSON.parse(localStorage.getItem("token"))
      }
    })
      const data=  await result.json()    
      setProducts(data)
    }
      const deleteProduct=async(id)=>{
        
        let Delete= await fetch(`http://localhost:5000/product/${id}`,{
          method:"delete"
        })
        Delete=   await Delete.json();
        console.log(Delete);
        if(Delete)
          getProduct()
       }

       const searchHandle=async(event)=>{
        console.log(event.target.value)
         let key= event.target.value
         if(key){
          let result= await fetch(`http://localhost:5000/search/${key}`)
          result= await result.json()
          if(result){
          setProducts(result)
         }
         }
         else{
          getProduct()
         }
        

       }
  return (
    <div className='product-list'>
      <h1>employe list </h1>
      <input type='text' className='search-product-box' placeholder='Search Employee'
      onChange={searchHandle} />
      <ul>
         <li>S.No</li>
         <li>Image</li>
         
         <li>Name</li>
       

         <li>Email</li>
         <li>MobileNo</li>
         <li>destination</li>
         <li>Gender</li>
         <li>Course</li>


         <li>Operation</li>

       
         </ul>
        
      
      
        { 
       products.length>0 ? products.map((item,index)=>
         <ul key={item._id}>
         <li>{index+1}</li>
         <li>{item.Image}</li>
         <li>{item.Name}</li>


         <li>{item.Email}</li>
         <li>{item.MobileNo}</li> 
         <li>{item.Destination}</li>
         <li>{item.Gender}</li>
         <li>{item.Course}</li>

        
         <li><button onClick={()=>deleteProduct(item._id)}>Delete</button>
         <Link to={"/update/"+item._id }>update</Link></li> 
         </ul>
        
        )
          :
          <h1>No Result Found</h1>
      
      } 

       

    </div>
  )
}

export default EmployeeList
