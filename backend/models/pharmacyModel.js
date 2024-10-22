import mongoose from "mongoose";

const pharmacySchema = new mongoose.Schema({
    name: {type:String, required:true},
    email: {type:String, required:true, unique:true},
    password: {type:String, required:true},
    image: {type:String, required:true},
    about: {type:String, required:true},
   address: {type:Object, default:{line1:'',line2:''}},
},{minimize:false})

const pharmacyModel = mongoose.models.pharmacy || mongoose.model('pharmacy',pharmacySchema )

export default pharmacyModel