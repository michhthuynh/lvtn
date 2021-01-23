const express = require('express');
const bodyParser = require('body-parser')
const router = require('./router');
const app = express()
const http = require('http').Server(app);
const session = require('express-session')
const passport = require('passport')
const io = require('socket.io')(http);
require('./config/passportConfig')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(session({ secret: "mySecret", resave: true, saveUninitialized: true }))
app.use(passport.initialize())
app.use(passport.session())

app.use('/static', express.static('public'))
app.set('view-engine', 'ejs')

app.use('/', router)

app.listen(3000, () => console.log('server is running 3000'))