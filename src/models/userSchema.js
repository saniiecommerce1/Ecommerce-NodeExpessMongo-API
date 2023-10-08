import mongoose from "mongoose"

const userSchemaModel = new mongoose.Schema({
    userName:{type: String, trim: true, unique:true, required: true },
    email: {type: String, trim: true},
    password: {type: String},
    firstName: {type: String},
    lastName: {type: String},
    isAdmin: {type: Boolean},
    profilePicture:{type: String},
    phone:{type: Number},
    address:{ type: String}
    
})

//creating collection with capital start InfoUserSchema save in capital like InfoSchema
//when post a collection auto create with name "infouserschema"
const UserSchema = new mongoose.model("User" , userSchemaModel)

export default UserSchema;