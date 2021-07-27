const express = require('express')
const app = express()
const port = 3000
const { dateFormat } = require('./tools/helper')

const logStuff = [logTime, logMethod, logPathname]

app.get('/', logStuff, (req, res) => {
  res.send('列出全部 Todo')
})

app.get('/new', logStuff, (req, res) => {
  res.send('新增 Todo 頁面')
})

app.get('/:id', logStuff, (req, res) => {
  res.send('顯示一筆 Todo')
})

app.post('/', logStuff, (req, res) => {
  res.send('新增一筆  Todo')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})

// middleware function
function logTime(req, res, next) {
  let date = new Date()
  date = dateFormat(date)
  console.log(`${date}`)
  next()
}
function logMethod(req, res, next) {
  console.log(`${req.method}`)
  next()
}
function logPathname(req, res, next) {
  console.log(`${req.originalUrl}`)
  console.log('------')
  next()
}
