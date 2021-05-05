const express = require('express')
const { getCurrentUser } = require('../controllers/userController.js')

const router = express.Router()

router.route('/me').get(getCurrentUser)

module.exports = router
