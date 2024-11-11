const mongoose= require("mongoose")
const EmployeeSchema= new mongoose.Schema({
    Name:String,
    UserId:String,
    Email: String,
    MobileNo: String,
    Destination:String,
    Gender:String,
    Course:String,
    Image:String,
})
module.exports= mongoose.model("products",EmployeeSchema)
