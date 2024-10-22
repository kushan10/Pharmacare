import validator from "validator"
import bcrypt from 'bcrypt'
import {v2 as cloudinary} from "cloudinary"
import pharmacyModel from "../models/pharmacyModel.js"
import jwt from 'jsonwebtoken'



// API for adding pharmacy
const addPharmacy = async (req,res) => {

    try {
        const { name, email, password, image, about, address } = req.body
        const imageFile = req.file

        // checking for all data to add doctor
        if(!name || !email || !password || !image || !about || !address){
            return res.json({success:false, message: "Missing Details"})
        }

        //validate
        if( !validator.isEmail(email)){
            return res.json({success:false, message: "Enter valid email"})
        }

        // validate password
        if(password.lenght < 8){
            return res.json({success:false, message: "Enter strong password"})
        }

        // hashing password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        //upload image cloudinary
        const imageUpload = await cloudinary.uploader.upload(imageFile.path,{resource_type:"image"})
        const imageUrl = imageUpload.secure_url

        const pharmacyData = {
            name,
            email,
            image:imageUrl,
            password:hashedPassword,
            about,
            address:JSON.parse(address),
            date:Date.now()
        }

        const newPharmacy = new pharmacyModel(pharmacyData)
        await newPharmacy.save()

        res.json({success:true,message:"Pharmacy Added"})
 
    } catch (error){
        console.log(error)
        res.json({success:false,message:error.message})
    }
}

// API for Admin login
const loginAdmin = async (req,res) => {
    try {

        const {email,password} = req.body

        if (email === process.env.ADMIN_EMAIL && password == process.env.ADMIN_PASSSWORD) {
            const token = jwt.sign(email+password,process.env.JWT_SECRET)
            res.json({success:true,token})

        } else {
            res.json({success:false,message:"Invalid credentials"})
        }

    }catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
}

export {addPharmacy,loginAdmin}