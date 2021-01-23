const express = require('express')
const { dashboard } = require('../controller/dashboard')
const { verifyLogin } = require('../middleware/verifyLogin')
const authRouter = require('./auth')
const router = express.Router()

router
  .use('/auth', authRouter)
  .get('/dashboard', verifyLogin, dashboard)

module.exports = router