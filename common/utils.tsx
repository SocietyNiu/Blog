export const safeJsonParse = (json: string | undefined) => {
  try {
    if (!json) throw 'invalid string'
    const jsonParse = JSON.parse(json)
    return jsonParse
  } catch (e) {
    console.log(e)
    return undefined
  }
}

export const transformDate2String = (date?: number, type?: 'time' | 'date') => {
  if (!date) return null
  var time = new Date(date)
  var year = time.getFullYear()
  var month = time.getMonth() + 1
  var day = time.getDate()
  var hour = time.getHours()
  var minute = time.getMinutes()
  var second = time.getSeconds()
  if (type === 'date') {
    return (
      (month < 10 ? '0' + month : month) + '-' + (day < 10 ? '0' + day : day)
    )
  }
  return (
    year +
    '-' +
    (month < 10 ? '0' + month : month) +
    '-' +
    (day < 10 ? '0' + day : day)
    /*+
    ' ' +
    (hour < 10 ? '0' + hour : hour) +
    ':' +
    (minute < 10 ? '0' + minute : minute) +
    ':' +
    (second < 10 ? '0' + second : second)*/
  )
}

export const transformDate2Year = (date?: number) => {
  if (!date) return undefined
  var time = new Date(date)
  var year = time.getFullYear()
  return year
}
