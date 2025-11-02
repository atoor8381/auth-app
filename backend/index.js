import express from 'express'
import 'dotenv/config'
import './DB/index.js'
import bodyParser from 'body-parser'
import cors from 'cors'
import Authroutes from './Routes/authrouter.js'
import { usermodel } from './Models/user.model.js'

let app = express()
let port = process.env.port

app.use(bodyParser.json())
app.use(cors())
app.use('/auth',Authroutes )

app.get('/',(req,res)=>{
    res.send("this is an auth ")
})

app.listen(port,()=>{
    console.log("the app is running on the port", port)
})