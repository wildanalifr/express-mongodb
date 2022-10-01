import express from 'express'
import { deleteUser, editUser, getUser, getUsers } from '../controllers/user.js'

const router = express.Router()

router.get('/', getUser)
router.get('/:id', getUsers)
router.post('/:id', editUser)
router.post('/:id', deleteUser)

export default router
