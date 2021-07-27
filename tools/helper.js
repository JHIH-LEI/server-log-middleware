const functions = {
  dateFormat: function (date) {
    const year = date.getFullYear()
    const month = (date.getMonth() + 1)
    const day = date.getDate()
    const hour = date.getHours()
    const mins = date.getMinutes()
    const sec = date.getSeconds()
    return `${year}-${month}-${day} ${hour}:${mins}:${sec}`
  }
}

module.exports = functions