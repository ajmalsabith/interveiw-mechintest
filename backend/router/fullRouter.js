
const express =require('express')
const usercontroller= require('../controllers/usercontroller')
const admincontroller= require('../controllers/admin.controller')

const userRoute= express()

const multer=require('multer')
const path=require('path')


const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,path.join(__dirname,'../public/img'))
    },
    filename:function(req,file,cb){
        const name=Date.now()+'-'+file.originalname
        cb(null,name)
    }
})

const upload=multer({storage:storage})


userRoute.post('/register',upload.single('image'),usercontroller.register)
userRoute.post('/login',usercontroller.login)
userRoute.post('/getdata',usercontroller.home)
userRoute.get('/home',admincontroller.admindashboard)
userRoute.delete('/delete/:id',admincontroller.deletefu)




module.exports=userRoute