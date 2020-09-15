const express = require('express')
const cors = require("cors")
const bodyParser = require("body-parser")
const dotenv = require('dotenv')

const app = express()
dotenv.config()

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res)=>{
    res.status(200).send("Final Project API")
})

const database = require('./database')
database.connect((err)=>{
    if(err){
        return console.error("error connecting : " + err.stack)
    }

    console.log("Connected as id : ", database.threadId)
})

const {userRouter, orderRouter, profileRouter, carouselRouter} = require("./router")
app.use("/api/users", userRouter)
app.use("/api/orders", orderRouter)
app.use("/api/profiles", profileRouter)
app.use("/api/carousel", carouselRouter)

const PORT = 2000
app.listen(PORT, ()=> console.log(`Server is running at port ${PORT}`))