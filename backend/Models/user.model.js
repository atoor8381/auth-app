import mongoose from "mongoose";

let Schema = mongoose.Schema

let userSchema = new Schema({
    name : {
        required : true,
        type : String
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password: {
        type: String,
        required: true,
    }
})

export const usermodel = mongoose.model('users',userSchema)