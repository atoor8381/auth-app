import express from 'express'
import { signupvalidate } from "./Middlewares/authvalidations.js";
import { loginvalidate } from "./Middlewares/authvalidations.js";
import { signup, login } from '../Controllers/authcontrollers.js';


let router = express.Router()

router.post('/login',signupvalidate,(req,res)=>{
    res.send('this is the login page')
})
router.post('/signup',loginvalidate,(req,res)=>{
    res.send('this is the signup page')
})

export default router