import { usermodel } from "../Models/user.model"
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

export let signup = async (req, res) => {
    try {
        //first of all we will take the name password and the email from the requests.
        let {name, email, password} = req.body
        let user = await usermodel.findOne({email})
        if (user) {
            // here we are using the code 409 this is code for the conflict means the user already exists 
            return res.send(409).json({
                message : "The user already exists",
                success : false
            }) // now this message will be used on the frontend to tell the user that u r already a user
        }
        // Here to save a new user to the mongo db we will need to create an object using the usermodel
        let usermodel = new usermodel({name,email,password})
        usermodel.password = await bcrypt.hash(password,10)
        await usermodel.save()
         res.status(201)
            .json({
                message: "Signup successfully",
                success: true
            })
    } catch (error) {
        res.status(500).json({
            message : "internal server error",
            success : false
        })
    }
}


export let login = async (req,res)=>{
    try{
    let {email, password} = req.body
    let user = await usermodel.findOne({email})
    if(!user){
        res.status(403).json({
            message : "User not found. Sign up to become a user",
            success : false
        })
    }
    let passwormatch = await bcrypt.compare(password, user.password)
    if(!passwormatch){
        res.status(403).json({
            message : "Password invalid",
            success : false 
        })
    }

    let jwttoken = jwt.sign(
        {user_email : user.email, user_id : user.id},
        process.env.jwt_secret,
        {expiresIn : '24h'}
    )

    res.status(200).json({
        message : "User logged in",
        success : true,
        jwttoken,
        email,
        name : user.name
    })
        } catch (err) {
        res.status(500)
            .json({
                message: "Internal server errror",
                success: false
            })
    }
}