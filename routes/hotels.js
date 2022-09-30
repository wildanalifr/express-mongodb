import express from 'express'
import {
  createHotel,
  deleteHotel,
  editHotel,
  getHotel,
  getHotels,
} from '../controllers/hotel.js'

const router = express.Router()

// GET ALL
router.get('/', getHotels)

// GET ONE
router.get('/:id', getHotel)

// CREATE
router.post('/', createHotel)

// UPDATE
router.put('/:id', editHotel)

// DELETE
router.delete('/:id', deleteHotel)

export default router
