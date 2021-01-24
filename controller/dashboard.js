module.exports.dashboard = (req, res) => {
  res.render('dashboard.ejs', {
    progress: 100 / 3,
    isStart: true,
    goForward: true,
  })
}