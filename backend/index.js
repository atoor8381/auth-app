import express from 'express'
import 'dotenv/config'
import './DB/index.js'

let app = express()
let port = process.env.port

app.get('/',(req,res)=>{
    res.send("this is an auth ")
})

app.listen(port,()=>{
    console.log("the app is running on the port", port)
})