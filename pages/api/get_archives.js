const express = require('express')

// create express app
const app = express()

// create Mysql
const db = require('./db')

const router = express.Router()

router.get('/api/get_archives', function (req, res) {
  const sql = 'select _id,title,time from posts'
  db.query(sql, (err, result) => {
    if (err) {
      return res.send({ state: 1, message: err })
    }
    return res.send({ state: 0, message: '查询成功', data: result })
  })
})

export default router
