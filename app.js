const express = require('express');
const bodyParser = require('body-parser')
const router = require('./router');
const app = express()
const server = require('http').Server(app);
const session = require('express-session')
const passport = require('passport')
const io = require('socket.io')(server);
require('./config/passportConfig')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(session({ secret: "mySecret", resave: true, saveUninitialized: true }))
app.use(passport.initialize())
app.use(passport.session())

io.on('connection', (socket) => {
  console.log('a user connected');
  io.sockets.emit('control', "msg");
  socket.on('control', function (msg) {
    console.log(msg);
    io.sockets.emit('control', msg);
  })
});

app.use('/static', express.static('public'))
app.set('view-engine', 'ejs')

app.use('/', router)



server.listen(3000, () => console.log('server is running 3000'))