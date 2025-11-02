import mongoose from "mongoose";
import 'dotenv/config'

console.log("here we go ")

let connectdb = process.env.DATABASE_CONNECTION_STRING

mongoose.connect(connectdb).then(()=>{
    console.log("database has been connected")
}).catch((error)=>{
    console.log(error)
})

