import User from '../models/User.js'

export const getUsers = async (req, res, next) => {
  try {
    const users = await User.find()
    res.status(200).json({ status: 'OK', data: users })
  } catch (error) {
    next(error)
  }
}

export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id)
    res.status(200).json({ status: 'OK', data: user })
  } catch (error) {
    next(error)
  }
}

export const editUser = async (req, res, next) => {
  try {
    const updateUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    )
    res
      .status(200)
      .json({ status: 'OK', message: 'User telah di update', data: updateUser })
  } catch (error) {
    next(error)
  }
}

export const deleteUser = async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params.id)
    res.status(200).json({ status: 'OK', message: 'User telah di hapus' })
  } catch (error) {
    next(error)
  }
}
