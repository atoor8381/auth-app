import { usermodel } from "../Models/user.model"


export let signup = async (req, res) => {
    try {
        //first of all we will take the name password and the email from the requests.
        let {name, email, password} = req.body
        let user = await usermodel.findOne({email})
        if (user) {
            // here we are using the code 409 this is code for the conflict means the user already exists 
            return res.send(409).json({
                message : "The user already exists"
            }) // now this message will be used on the frontend to tell the user that u r already a user
        }
        
    } catch (error) {
        
    }
}