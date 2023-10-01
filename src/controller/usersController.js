
import InfoSchema from '../models/informationSchema.js'




const postData = async(req, res)=>{
    try{
        
        const addInfo = new InfoSchema(req.body)
        addInfo.save()  //to save in DB 
        const addData = await addInfo  //addInfo is promise
        res.status(201).send(addData)   //201 created Server 
        //to get the response in the postman all below too working
        // res.send(addData)
        // res.status(201).json({ addData })
        // res.status(201).json({ addInfo })
    } catch(error){ 
        res.status(404).json({ error: error.message})       
        // res.status(400).send(error)
        // res.status(400).json({ message: error.message })
      }
}


const getAll = async(req, res, next)=>{
    try{
        // cons.log("hii")  catches error
        const getInfos = await InfoSchema.find({}).sort({"name": 1}) //not in db sort      
        res.status(200).send(getInfos)   //201 created Server 
       
    } catch(error){        
        res.status(404).send({error: error.message}) 
        //OR      
        // res.status(404).json({error: error.message})       
              
        
      
              
      }
    
}


const getById = async(req, res)=>{
    try{
        
        const getInfo = await InfoSchema.findById({'_id' : req.params.id})       
        res.status(200).send(getInfo)   //201 created Server 
       
    } catch(error){        
        res.status(404).send(error)       
      }
}

const updateById = async(req, res)=>{
    try{
        const updateInfo = await InfoSchema.findByIdAndUpdate(req.params.id, req.body, {new:true} )       
        res.status(201).send(updateInfo)   //201 created Server 
       
    } catch(error){        
        res.status(500).send(error)  //data in server so server error used    
      }
}


const deleteById = async(req, res)=>{
    try{
        const deleteInfo = await InfoSchema.findByIdAndDelete(req.params.id, req.body)       
        res.status(201).send(deleteInfo)   //201 created Server 
       
    } catch(error){        
        res.status(500).send(error)  //data in server so server error used    
      }
}


const getByName = async(req, res)=>{
    try{
        
        const getInfo = await InfoSchema.find({'name' : req.params.name})       
        if (getInfo.length === 0) res.status(200).send(`No data behind the field ${req.params.name}`)
        res.status(200).send(getInfo)   //201 created Server 
       
    } catch(error){        
        res.status(400).send(error)       
      }
}

const updateByName = async(req, res)=>{
    try{
        const updateInfo = await InfoSchema.findOneAndUpdate({'name': req.params.name}, req.body, {new: true}) //{new: true} to see change in postman      
        res.status(201).send(updateInfo)   //201 created Server 
       
    } catch(error){        
        res.status(500).send(error)  //data in server so server error used    
      }
}



const usersController = { postData, getAll, getById, updateById, deleteById, getByName, updateByName }
export default usersController;
