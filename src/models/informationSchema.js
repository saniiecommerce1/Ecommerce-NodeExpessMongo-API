import mongoose from "mongoose"

const infoSchema = new mongoose.Schema({
    name:{type: String, trim: true, required: true},
    surname: {type: String, trim: true},
    email:{type: String, trim: true, unique: true},
    id:{type:Number, required: true},
    user: {type: String, default: "buyer"}
})

//creating collection with capital start InfoUserSchema save in capital like InfoSchema
//when post a collection auto create with name "infouserschema"
const InfoSchema = new mongoose.model("InfoUserSchema" ,infoSchema)

export default InfoSchema;