import express from 'express'
import authRouter from './auth.js'
import hotelRouter from './hotels.js'

const route = express.Router()

route.use('/auth', authRouter)
route.use('/hotels', hotelRouter)

export default route
