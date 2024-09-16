import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
const ProductList = () => {
   

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
      <h1>Product List</h1>
      <input type='text' className='search-product-box' placeholder='Search Product'
      onChange={searchHandle} />
      <ul>
         <li>S.No</li>
         <li>Name</li>
         <li>Price</li>
         <li>Category</li>
         <li>Company</li>
         <li>Operation</li>
         </ul>
        
      
      
        { 
       products.length>0 ? products.map((item,index)=>
         <ul key={item._id}>
         <li>{index+1}</li>
         <li>{item.Name}</li>
         <li>{item.Price}</li> 
         <li>{item.Category}</li>
         <li>{item.Company}</li>
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

export default ProductList
