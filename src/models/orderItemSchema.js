import mongoose from "mongoose"

const orderItemSchemaModel = new mongoose.Schema({
quantity: {type: Number, required: true},
product:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product"
}
    
})

const OrderItemSchema = new mongoose.model("OrderItem" , orderItemSchemaModel)

export default OrderItemSchema;