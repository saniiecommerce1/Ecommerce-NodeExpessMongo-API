
import productService from '../services/productService.js'


const postData = async(req, res)=>{
    try{
        const data = {
            title: req.body.title,
            description:req.body.description, 
            productPicture: req.body.productPicture,
            price:req.body.price,
            category: req.body.category            
        }

        const addData = await productService.postService(req,res, data)
        res.status(201).send(addData)   
      


      //catch error when post data not per schema rule/    
    } catch(error){ 
        res.status(400).send({
            status: "productContoller POST catch error",
            message: error.message
        })
        
    } 
       
}
const getAll = async(req, res)=>{
    try{
        
        const getAllData = await productService.getAllService(req, res)        
        res.status(200).send(getAllData)   
       
    } catch(error){        
        res.status(404).send({status: "productContoller GETAll catch error",message: error.message})       
                   
      }
    
}


const getById = async(req, res)=>{
    try{

        const getData = await productService.getServiceById(req, res)        
        res.status(200).send(getData)

    } catch(error){        
        res.status(404).send({status: "productContoller GET catch error",message: error.message})       
      }
}

const updateById = async(req, res)=>{
    try{
    
        const updateData = await productService.updateService(req, res)
        res.status(201).send(updateData)
    }
    catch(error){
        res.status(404).send({status: "productContoller Update catch error",message: error.message})
    }
}

const deleteById = async(req, res)=>{
    try{

        const deleteData = await productService.deleteService(req, res)
        res.status(200).send(deleteData)
    
           
        } catch(error){        
            res.status(404).send({status: "productContoller Delete catch error",message: error.message})    
          }
}




const productController = { postData, getAll, getById, updateById, deleteById}
export default productController;



