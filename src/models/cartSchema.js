import mongoose from "mongoose"

const cartSchemaModel = new mongoose.Schema({
   orderItems : [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "OrderItem"
   }],

   totalPrice: {type: Number}
    
})

const CartSchema = new mongoose.model("Cart" , cartSchemaModel)

export default CartSchema;