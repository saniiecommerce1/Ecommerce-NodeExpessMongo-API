import express from "express";
import connectDB from './db/connectionMongo.js'    //mesg on dev connected/or not with MongoDB
import router from './routers/routesInfo.js'  //.js must in es6

//for .env file
import dotenv from 'dotenv'
dotenv.config()



const app = express()
const port = process.env.PORT || 3000  //deployment time auto port pick
const hostName = "localhost"




//below two codes for Post error null
app.use(express.json())
// app.use(express.urlencoded({ extended : true}))


//for permission/register router in app
app.use('/api' , router)   //'/api' is optional otherwise goto the router

//mesg on dev to show host connected with express server


//Middleware works if route otherthan this /api/users/ like /ap, /user/ID, /apuse/name
//only see route not param/query
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
