import Joi from "joi";

// any function we pass as the argument to the app.use autometically gets the request response and next as the arguments so we gotta have the params for them 

export function signupvalidate(req,res,next){
    let schema = Joi.object({
        name : Joi.string().min(3).required(),
        email : Joi.string().email().required(),
        password : Joi.string().min(5).required()
    })
    let {error} = schema.validate(req.body)
    // here the joi returns the object which has an error field undefined if everything goes well but if there is some error that error is there in the error key of the object 
    if(error){
        console.log("bad request", error)
    }
    next()
}

export function loginvalidate(req,res,next){
    let schema = Joi.object({
        email : Joi.string().email().required(),
        password : Joi.string().min(5).required()
    })
    let error = schema.validate(req.body)
    if (error) {
        console.log("invalid req",error)
    }
    next()
}