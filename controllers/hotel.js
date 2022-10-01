import Hotel from '../models/Hotel.js'

export const getHotels = async (req, res, next) => {
  try {
    const hotels = await Hotel.find()
    res.status(200).json({ status: 'OK', data: hotels })
  } catch (error) {
    next(error)
  }
}

export const getHotel = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id)
    res.status(200).json({ status: 'OK', data: hotel })
  } catch (error) {
    next(error)
  }
}

export const createHotel = async (req, res, next) => {
  const newHotel = new Hotel(req.body)
  try {
    const savedHotel = await newHotel.save()
    res.status(201).json({ status: 'OK', data: savedHotel })
  } catch (error) {
    next(error)
  }
}

export const editHotel = async (req, res, next) => {
  try {
    const updateHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    )
    res.status(200).json({ status: 'OK', data: updateHotel })
  } catch (error) {
    next(error)
  }
}

export const deleteHotel = async (req, res, next) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id)
    res.status(200).json({ status: 'OK', message: 'Hotel berhasil terhapus' })
  } catch (error) {
    next(error)
  }
}
