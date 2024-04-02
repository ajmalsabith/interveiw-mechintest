const user= require('../Models/userModel')


const admindashboard=async(req,res)=>{

    try {

        const userdata= await user.find({})
        console.log(userdata);
        if (userdata) {
            res.send({
                data:userdata
            })
        }else{
            res.status(400).send({
                message:'somthing wrong..!'
            })
        }
    } catch (error) {
        console.log(err.message);
    }
}

const deletefu = async(req,res)=>{
    try {

        const id= await req.params.id
        
        console.log(id+'delteid');
        const userdata= await user.deleteOne({_id:id})
        if (userdata) {
           
               res.send({
                message:'success'
               })
           
            
        }else{
            res.status(400).send({
                message:' wrong..!'
            })
        }
       
    } catch (error) {
        console.log(error.message);
    }
}




module.exports={
    admindashboard,
    deletefu
}