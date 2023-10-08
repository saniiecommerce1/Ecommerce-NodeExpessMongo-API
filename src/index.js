import express from "express";
import connectDB from './db/connectionMongo.js'    //mesg on dev connected/or not with MongoDB
import userRoutes from './routers/userRoutes.js'  //.js must in es6
import productRoutes from './routers/productRoutes.js'  
import orderRoutes from './routers/orderRoutes.js'  
import cartRoutes from './routers/cartRoutes.js'  
// import bodyParser from "body-parser";

//for .env file
import dotenv from 'dotenv'
dotenv.config()





const app = express()
const port = process.env.PORT || 3000  //deployment time auto port pick
const hostName = "localhost"



//below two codes for Post error null
app.use(express.json())  //OR app.use(bodyParser.json())
// app.use(express.urlencoded({ extended : true}))
//express has builtin own bodyparser implementation so dont need to use bodyparser package



//for permission/register router in app
app.use('/api/user' , userRoutes)   //'/api' is optional otherwise goto the router
app.use('/api/product' , productRoutes)   
app.use('/api/cart' , cartRoutes)   
app.use('/api/order' , orderRoutes)   





//mesg on dev to show host connected with express server


//Middleware works if route otherthan this /api/users/ like /ap, /user/ID, /apuse/name
//if route passed then error catch and end connection
//if not not found route then come below
app.use((req , res, next)=>{
  // res.status(404).send({"error": "Yes some error "})
  next(new Error("Something went wrong in route Path"))
})




// Below is error handler call by next(error)
app.use((error , req, res, next)=>{
  res.status(error.status || 500)
  res.send({message : error.message})
})




const start = async()=> {

 await connectDB(process.env.URL) 
  
 app.listen(port, hostName, () => {
    console.log('The server is running port ' + port)
  })
  
}

start()

//Note: if error come in node like 491 throw err or port is already use just
// End task VS code all in task manager
// If not solve then delete node_module folder and install npm i





