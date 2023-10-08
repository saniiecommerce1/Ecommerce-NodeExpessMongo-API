import userService from '../services/userService.js'


const postData = async(req, res)=>{
    try{
        const data = {
            userName: req.body. userName,
            email: req.body.email ,
            password: req.body.password ,
            firstName: req.body.firstName ,
            lastName: req.body.lastName ,
            isAdmin: req.body.isAdmin ,
            profilePicture:req.body.profilePicture ,
            phone:req.body.phone ,
            address:req.body.address
        }

        const addData = await userService.postService(req,res, data )
        res.status(201).send(addData)   
      


      //catch error when post data not per schema rule/    
    } catch(error){ 
        res.status(400).send({
            status: "userContoller POST catch error",
            message: error.message
        })
      }
    } 
          //201 created Server 
        //to get the response in the postman 
        // all below too working
        // res.send(addData)
        // res.status(201).json({ addData })
        // res.status(201).json({ addUserSchema })


        // res.status(400).send(error) // //send and close conection
        // res.status(400).json({ message: error.message })             
        // res.status(404).json({reason: error.message})//send in json format and close conection
        // response.write  //you can send multiple responses


const getAll = async(req, res)=>{
    try{
        
        const getAllData = await userService.getAllService(req, res)        
        res.status(200).send(getAllData)   
       
    } catch(error){        
        res.status(404).send({status: "userContoller GETAll catch error",message: error.message})       
                   
      }
    
}


const getById = async(req, res)=>{
    try{

        const getData = await userService.getServiceById(req, res)        
        res.status(200).send(getData)

    } catch(error){        
        res.status(404).send({status: "userContoller GET catch error",message: error.message})       
      }
}

const updateById = async(req, res)=>{
try{
    
    const updateData = await userService.updateService(req, res)
    res.status(201).send(updateData)
}
catch(error){
    res.status(404).send({status: "userContoller Update catch error",message: error.message})
}
    
}

const deleteById = async(req, res)=>{
    try{

    const deleteData = await userService.deleteService(req, res)
    res.status(200).send(deleteData)

       
    } catch(error){        
        res.status(404).send({status: "userContoller Delete catch error",message: error.message})    
      }
}





const usersController = { postData, getAll, getById, updateById, deleteById }
export default usersController;




// const getByName = async(req, res)=>{
//     try{
        
//         const getUserSchema = await UserSchema.find({'userName' : req.params.userName})       
//         if (getUserSchema.length === 0) res.status(200).send(`No data behind the field ${req.params.userName}`)
//         res.status(200).send(getUserSchema)   //201 created Server 
       
//     } catch(error){        
//         res.status(400).send(error)       
//       }
// }

// const updateByName = async(req, res)=>{
//     try{
//         const updateUserSchema = await UserSchema.findOneAndUpdate({'userName': req.params.userName}, req.body, {new: true}) //{new: true} to see change in postman      
//         res.status(201).send(updateUserSchema)   //201 created Server 
       
//     } catch(error){        
//         res.status(500).send(error)  //data in server so server error used    
//       }
// }


