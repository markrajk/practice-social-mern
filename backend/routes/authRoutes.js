const express = require('express')
const passport = require('passport')
const router = express.Router()

router.route('/google').get(
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  })
)

router
  .route('/google/callback')
  .get(
    passport.authenticate('google', { failureRedirect: '/login' }),
    function (req, res) {
      if (req.user) {
        res.redirect(`http://localhost:3000/`)
      } else {
        res.redirect(`http://localhost:3000/login`)
      }
    }
  )

router.route('/logout').get((req, res) => {
  req.session = null
  req.logout()
  res.redirect('/')
})

module.exports = router
