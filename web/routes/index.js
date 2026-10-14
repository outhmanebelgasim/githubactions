const express = require('express')
const { description } = require('../package.json')
const router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'CI/CD Intro', description })
})

/* GET ice-flakes resource */
router.get('/ice-flakes', function (req, res, next) {
  res
    .status(201)
    .json({
      resource: 'ice-flakes',
      count: 1005,
      shape: 'rectangle'
    })
})

module.exports = router
