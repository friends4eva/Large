const express = require('express');
const router = express.Router()

router.get('/', (req, res, next) => {
  res.render('user');
  // res.send('User Page')
})

router.post('/', (req, res, next) => {

})

module.exports = router

