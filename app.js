const express = require('express')
const app = express()
const port = 3000
const { dateFormat } = require('./tools/helper')

// middleware function
const generateLog = (req, res, next) => {
  // 產生時間戳記
  let date = new Date() //進入瀏覽器的時間
  let start = Date.now() //毫秒單位
  date = dateFormat(date) //轉成yyyy-dd-yy
  // 產生req方法
  const method = req.method
  // 產生req url
  const url = req.originalUrl
  next()
  let end = Date.now() //回傳毫秒
  let total = 0
  total = end - start
  // 印出server log
  console.log(`${date}｜${method} from ${url}｜total time: ${total}ms`)
}

app.use(generateLog)

app.get('/', (req, res) => {
  res.send('列出全部 Todo')
})

app.get('/new', (req, res) => {
  res.send('新增 Todo 頁面')
})

app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')
})

app.post('/', (req, res) => {
  res.send('新增一筆  Todo')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})