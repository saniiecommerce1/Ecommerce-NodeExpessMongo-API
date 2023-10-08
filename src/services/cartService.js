import CartSchema from '../models/cartSchema.js'
import OrderItemSchema from '../models/orderItemSchema.js'



const postService = async(req, res)=>{



try{

    //POST from frontend like this:
    // {
    //     "orderItems": [
    // {"quantity": 2, "product": "6522cf610178c79d79c85a41"},
    
    // {"quantity": 4, "product": "6522cf870178c79d79c85a43"},
    
    // {"quantity": 5, "product": "6522cfc10178c79d79c85a45"}
    // ]
        
    // }

    const orderItemsId = req.body.orderItems.map( async orderitem =>{
        const order = {
            quantity: orderitem.quantity,
            product: orderitem.product}

        const addOrderItem = new OrderItemSchema(order)  
        const orderItem = await addOrderItem.save()   
        return orderItem._id    
    })

    const orderItemsIdPromise = Promise.all(orderItemsId)

    const orderItemsIdResolved = await orderItemsIdPromise
    console.log(orderItemsIdResolved)

    // find total orderItem price and then total orderItems

    const totalOrderItemPriceList = await Promise.all(orderItemsIdResolved.map(async orderItemId =>{
        const orderItem = await OrderItemSchema.findById(orderItemId).populate('product' , 'price')  //only want price field
        const totalOrderItemPrice = orderItem.quantity * orderItem.product.price
        return totalOrderItemPrice
    
    }))

    console.log(totalOrderItemPriceList)

    const totalPrice = totalOrderItemPriceList.reduce((a , b) => a+b , 0)

    console.log(totalPrice)

    const data = {
        orderItems : orderItemsIdResolved,
        totalPrice: totalPrice } // calc from backend not frontend bc hacker can manipulate 1000 to 1

const addCartSchema = new CartSchema(data)  //or simply req.body  


const addData = await addCartSchema.save()  //addCartSchema is promise and save in dB
return addData;
}      
catch(error){ 
res.status(404).json({ status: "cartService POST catch error",
                    message: error.message})     
        
}
}


const getAllService = async (req, res) =>{
    try{  
     
        const getCartSchemas = await CartSchema.find({}).sort({"title": 1}) //not in db sort      
        return getCartSchemas;
      
       
    } catch(error){        
        res.status(404).send({status: "cartService GETALL catch error",
                            message: error.message})       
                   
      }
}


const getServiceById = async (req, res) =>{
    try{
        console.log(req.params)  //{ id: '651ae12da3793a263391103e' }
        const getCartSchema = await CartSchema.findById({'_id' : req.params.id})       
        return getCartSchema;   
       
        //catch error when id is wrong/when not find data
    } catch(error){        
        res.status(404).send({status: "cartService GET catch error",
        message: error.message})       
      }
}


const updateService = async (req, res) =>{
    try{
        console.log(req.params)  //check by giving ID and otherthan ID like sana(error catch)
        const updateCartSchema = await CartSchema.findByIdAndUpdate(req.params.id, req.body, {new:true} )       
        return updateCartSchema;
       

     
    } catch(error){        
        res.status(500).send({status: "cartService PUT catch error",
        message: error.message})  //data in server so server error used    
      //{"error": "Cast to ObjectId failed for value \"sana\" (type string) at path \"_id\" for model \"CartSchemaCartSchema\""}
}

}
const deleteService = async (req, res) =>{
try{
    const deleteData = await CartSchema.findByIdAndDelete({_id: req.params.id})       
    return deleteData;
}catch(error){
    res.status(500).send({status: "cartService PUT catch error",
    message: error.message})
}}



const cartService = {postService , getAllService, getServiceById, updateService, deleteService}
export default cartService
