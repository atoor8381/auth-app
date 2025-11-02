import express from 'express'

let router = express.Router()

router.post('/login',(req,res)=>{
    res.send('this is the login page')
})

export default router