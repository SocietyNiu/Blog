const express = require('express')

// create express app
const app = express()

// create Mysql
const db = require('./db')

const router = express.Router()

router.get('/api/get_post', function (req, res) {
  const _id = req.query._id
  const sql = `select * from posts where _id=${_id}`
  db.query(sql, (err, result) => {
    if (err) {
      return res.send({ state: 1, message: err })
    }
    return res.send({ state: 0, message: '查询成功', data: result[0] })
  })
})

export default router
