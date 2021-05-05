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
        res.redirect(`https://practice-social-mern.herokuapp.com/`)
      } else {
        res.redirect(`https://practice-social-mern.herokuapp.com/login`)
      }
    }
  )

router.route('/logout').get((req, res) => {
  req.session = null
  req.logout()
  res.redirect('/')
})

module.exports = router
