import User from '../models/User.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const register = async (req, res, next) => {
  try {
    const { username, email, password, isAdmin } = req.body

    const isDuplicate = await User.find({
      $or: [
        {
          username,
        },
        { email },
      ],
    })

    if (isDuplicate.length != 0) {
      res.status(401).json({ message: 'Username atau Email tidak boleh sama' })
    }

    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(password, salt)

    const newUser = new User({
      username,
      email,
      password: hash,
      isAdmin,
    })
    await newUser.save()
    res.status(201).json({
      status: true,
      message: 'Berhasil Register',
    })
  } catch (error) {
    next(error)
  }
}

export const login = async (req, res, next) => {
  try {
    const { username, password } = req.body

    const user = await User.findOne({ username: username })
    const isPasswordCorrect = await bcrypt.compare(password, user.password)
    if (!user || !isPasswordCorrect) {
      res.status(400).json({ message: 'Username atau Password salah' })
    } else {
      const { password, ...otherDetails } = user._doc
      const token = jwt.sign(
        { id: user._id, isAdmin: user.isAdmin },
        process.env.JWT
      )
      res.status(200).json({ data: otherDetails, token })
    }
  } catch (error) {
    next(error)
  }
}
