
const user= require('../Models/userModel')

const register =async (req,res)=>{
    try {

        
        const imageFile = req.file.filename

        const name = req.body.name
        const phone = req.body.phone
        const email = req.body.email
        const password = req.body.password
        

        if (password|| email) {
            const newuser= new user({
                name:name,
                phone:phone,
                email:email,
                password:password,
                image:imageFile
            })
            
            const result = await newuser.save()
    
            console.log(result);
    
    
            if (result) {
                console.log('yes ok');
                res.status(200).send({
                  message:'register success',id:result._id
                })
            }else{
                console.log('yes not il');

                res.status(400).send({
                    message:"somthing wrong..!"
                })
            }
    
        }else{
            res.status(400).send({
                message:'please correct password'
            })
        }

      

        

        
    } catch (error) {
        console.log(error.message);
    }
}


const login = async(req,res)=>{
    try {

        const email= await req.body.email
        
        const password= await req.body.password
        const userdata= await user.findOne({email:email})
        if (userdata) {
            if (userdata.password==password) {
               res.send({
                message:'success',id:userdata._id
               })
            }else{
                res.status(400).send({
                    message:'password wrong..!'
                })
            }
            
        }else{
            res.status(400).send({
                message:'email wrong..!'
            })
        }
       
    } catch (error) {
        console.log(error.message);
    }
}


const home = async(req,res)=>{
    try {
        console.log('yes');
       const userid= req.body.id
       console.log(userid);
      const userdata= await user.find({_id:userid})

      if(userdata){
        res.status(200).send({
            data:userdata
        })
      }else{
        res.status(400).send({
            message:'somthing wrong...'
        })
      }
        
    } catch (error) {
        console.log(error.message);
    }
}





module.exports={
    register,
    login,
    home
 
}