const User = require('../models/userModel.js')
const asyncHandler = require('express-async-handler')

const getCurrentUser = asyncHandler(async (req, res) => {
  if (!req.user) {
    return res.status(404).json({
      error: 'User not found',
    })
  }
  const user = await User.find({ email: req.user.email })

  res.status(200).json(user)
})

module.exports = { getCurrentUser }
