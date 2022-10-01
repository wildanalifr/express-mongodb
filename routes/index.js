import express from 'express'
import authRouter from './auth.js'
import hotelRouter from './hotels.js'
import userRouter from './users.js'

const route = express.Router()

route.use('/auth', authRouter)
route.use('/hotels', hotelRouter)
route.use('/users', userRouter)

export default route
