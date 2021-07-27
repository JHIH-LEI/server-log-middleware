const functions = {
  dateFormat: function (date) {
    const year = date.getFullYear()
    const month = (date.getMonth() + 1)
    const day = date.getDate()
    const hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
    const mins = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
    const sec = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
    return `${year}-${month}-${day} ${hour}:${mins}:${sec}`
  }
}

module.exports = functions