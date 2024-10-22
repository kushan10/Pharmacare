import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {type:String, required:true},
    email: {type:String, required:true, unique:true},
    password: {type:String, required:true},
    image: {type:String, required:true},
    about: {type:String, required:true},
    address: {type:Object, default:{line1:'',line2:''}},
    gender: {type:String,default:"Not Selected"},
    phone: {type:String,default:'0000000000000'}
},{minimize:false})

const userModel = mongoose.models.user || mongoose.model('user',userSchema )

export default userModel