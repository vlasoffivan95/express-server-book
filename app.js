const express = require("express")
const app = express()
const bookRouter = express.Router()



app.get( "/", (req,res,next)=> {
    res.send("keks")
})
module.exports = app