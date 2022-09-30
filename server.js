import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

//ROUTER
import router from './routes/index.js'
import { errorHandling } from './utils/error.js'

const app = express()
dotenv.config()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO)
    console.log('Connect on MongoDB')
  } catch (error) {
    handleError(error)
  }
}

app.use('/', router)

app.use((req, res, next) => {
  res.status(404).json('404 page')
})

app.use(errorHandling)

app.listen(process.env.PORT, () => {
  connect()
  console.log(`Running on port :${process.env.PORT}`)
})
