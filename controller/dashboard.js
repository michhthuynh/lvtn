module.exports.dashboard = (req, res) => {
  res.render('dashboard.ejs', { progress: 100 / 2 })
}