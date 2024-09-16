const express= require('express')
const app= express()
const cors= require("cors")
require("./db/config")
const User= require("./db/User") 
const Product= require("./db/products") 
const Jwt= require("jsonwebtoken")
const  JwtKey= "e-comm"

app.use(cors())
app.use(express.json())
 app.post("/register",async(req, res)=>{
 const data=  await User.findOne({Email:req.body.Email})
  console.log("data=====",data)
    if(data){
       res.send({data :false})
    }
    let user=  new User(req.body)
    let result=  await user.save() 
    result= result.toObject();
    delete result.Password  
    Jwt.sign({result},JwtKey,{expiresIn:"2h"},(err,token)=>{
        if(err){
            res.send({result :"Something went wrong..please try it again"})
        }
        res.send({result,auth:token})
    })




        // res.send(result)
})

app.post("/login",async(req, res)=>{   
    if(req.body.Email&&req.body.Password)  {
        let user=  await User.findOne(req.body).select("-Password")  
        if(user){
            
            Jwt.sign({user},JwtKey,{expiresIn:"2h"},(err,token)=>{
                if(err){
                    res.send({result :"Something went wrong..please try it again"})
                }
                res.send({user,auth:token})
            })

            
            //  res.send(user)
          
        }
        else{
        res.send({result:"No user found"})
        }
    }
    else{
        res.send({result:"No user found"})
    }     
})

app.post("/add-product",async(req, res)=>{
    let product=  new Product(req.body)
    let result=  await product.save() 
     
    res.send(result)

})

app.get("/products",async(req, res)=>{
    const products= await Product.find({})  
    if(products.length>0){
        res.send(products)
    }
    else{
        res.send({result:"No product found"})
    }
})

app.delete("/product/:id",async(req,res)=>{       
       const product=  await Product.deleteOne({_id:req.params.id})
       res.send(product);
})

app.get("/product/:id",async(req, res)=>{
    const result= await Product.findOne({_id:req.params.id}) 
    if(result){      
        
        res.send(result)
    }
    else{       
        res.send({result:"No product found"})
    }   

})
app.put("/product/:id",async(req,res)=>{
     const result= await Product.updateOne(
        { _id: req.params.id },
    
          {$set: req.body}
    )
    res.send(result)
})

app.get("/search/:key",async(req, res)=>{
    let result= await Product.find({
        "$or":[
            {Name:{$regex:req.params.key }},
            {Company:{$regex:req.params.key }},
            {Category:{$regex:req.params.key }}
        ]
       
    }) 
    res.send(result)
    

})
app.listen(5000)