const fs = require('fs')

module.exports.login = (req, res) => {
  const { username, password } = req.body
  fs.readFile('./asset/user.json', async (err, data) => {
    const db = JSON.parse(data)

    const userRecord = db.find(user => user.username === username)
    if (userRecord && userRecord.password === password) {
      console.log('run')
    } else {
      console.log('false')
    }
  })
}

module.exports.logout = (req, res) => {
  req.logout()
  res.redirect('/auth/login')
}