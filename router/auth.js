const express = require('express')
const passport = require('passport')
const authRouter = express.Router()
const { logout } = require('../controller/auth')

authRouter
  .get('/login', (req, res) => {
    if (req.isAuthenticated()) {
      res.redirect('/dashboard')
      return
    }
    res.render('login.ejs', { name: 'huynh' })
  })
  .post('/login', passport.authenticate('local', { failureRedirect: './login', successRedirect: '../dashboard' }))
  .get('/logout', logout)

module.exports = authRouter