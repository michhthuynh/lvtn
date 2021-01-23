const passport = require('passport')
const localStrategy = require('passport-local').Strategy
const fs = require('fs')

passport.use(new localStrategy((username, password, done) => {
  fs.readFile('./asset/user.json', (err, data) => {
    const db = JSON.parse(data)
    const userRecord = db.find(user => user.username === username)
    if (userRecord && userRecord.password === password) {
      done(null, userRecord)
    } else {
      done(null, false)
    }
  })
}))

passport.serializeUser((user, done) => {
  done(null, user.username)
})

passport.deserializeUser((username, done) => {
  fs.readFile('./asset/user.json', (err, data) => {
    const db = JSON.parse(data)
    const userRecord = db.find(user => user.username === username)
    if (userRecord) {
      return done(null, userRecord)
    } else {
      return done(null, false)
    }
  })
})