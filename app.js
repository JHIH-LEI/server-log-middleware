const express = require('express')
const app = express()
const port = 3000
const { dateFormat } = require('./tools/helper')
const logStuff = [logTime, logMethod, logPathname]
let start = 0

const duration = () => {
  let end = Date.now() //回傳毫秒
  let total = 0
  total = end - start
  console.log(`total time: ${total}ms`)
  console.log('------')
}

app.get('/', logStuff, (req, res, next) => {
  res.send('列出全部 Todo')
  next()
}, duration)

app.get('/new', logStuff, (req, res, next) => {
  res.send('新增 Todo 頁面')
  next()
}, duration)

app.get('/:id', logStuff, (req, res, next) => {
  res.send('顯示一筆 Todo')
  next()
}, duration)

app.post('/', logStuff, (req, res, next) => {
  res.send('新增一筆  Todo')
  next()
}, duration)

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})

// middleware function
function logTime(req, res, next) {
  let date = new Date() //進入瀏覽器的時間
  start = Date.now() //毫秒單位
  date = dateFormat(date) //轉成yyyy-dd-yy
  console.log(`${date}`)
  next()
}
function logMethod(req, res, next) {
  console.log(`${req.method}`)
  next()
}
function logPathname(req, res, next) {
  console.log(`${req.originalUrl}`)
  next()
}