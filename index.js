require('dotenv').config()
const express = require('express')
const app = express()
const mongoose= require('mongoose')

mongoose.set('strictQuery', true);
mongoose.connect(process.env.DATABASE_URL)

const db=mongoose.connection
db.on('error',(error)=>console.error(error));
db.once('open',()=>console.log('Connected Successsfully'));

//FOR SERVER STOS ACCEPT JSON AS REQ,RES
app.use(express.json())


const subscribersRouter = require('./routes/subscribers.js')
app.use('/subscribers', subscribersRouter)

app.listen(3000, () => console.log(`server listening on port 3000!`))