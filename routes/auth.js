import express from 'express'
import { login, register } from '../controllers/auth.js'
import { verifyAdmin, verifyToken, verifyUser } from '../utils/verifyToken.js'

const router = express.Router()

router.post('/register', register)
router.post('/login', login)

router.get('/checkauthentication', verifyToken, (req, res) => {
  res.send('hello user, you are logged in and authenticated')
})

router.get('/checkuser/:id', verifyUser, (req, res) => {
  res.send('hello user, you are user')
})

router.get('/checkadmin/:id', verifyAdmin, (req, res) => {
  res.send('hello admin, you are admin')
})

export default router
