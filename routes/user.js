const express = require('express');
const router = express.Router()
const User = require('../models/user')

router.get('/', (req, res, next) => {
  res.render('user');
  // res.send('User Page')
})

router.post('/', (req, res, next) => {

  var item = {
    name: req.body.name,
    post: {
      title: req.body.title,
      content: req.body.content
    }
  }
let blogger = new User(item);
blogger.save();
// console.log(JSON.stringify(req.body, null, 2))

})

module.exports = router

