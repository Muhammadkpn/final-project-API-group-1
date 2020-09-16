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

const {productRouter, cartRouter} = require('./router')
app.use('/api', productRouter)
app.use('/api', cartRouter)

const PORT = 3000
app.listen(PORT, ()=> console.log(`Server is running at port ${PORT}`))