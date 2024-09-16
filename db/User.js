const mongoose= require("mongoose")
const productScheme=new  mongoose.Schema({
    Name: String,
    Email: String,
    Password: String
})
module.exports= mongoose.model("users",productScheme)