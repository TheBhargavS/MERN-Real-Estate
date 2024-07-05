import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()
const mongooseConnection = mongoose.connect(process.env.MONGO)
.then(()=>{
  console.log('Connected to mongoose')
})
.catch((err)=>{
  console.log('Error in connecting to database ',err)
})

const app = express()

app.listen(3000, ()=>{
  console.log(`Server is running on port: 3000`)
})