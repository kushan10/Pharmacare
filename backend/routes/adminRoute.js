import express from 'express'
import { addPharmacy, loginAdmin } from '../controllers/adminController.js'
import upload from '../middlewares/multer.js'
import authAdmin from '../middlewares/authADmin.js'

const adminRouter = express.Router()

adminRouter.post('/add-pharmacy',authAdmin,upload.single('image'),addPharmacy)
adminRouter.post('/login',loginAdmin)

export default adminRouter