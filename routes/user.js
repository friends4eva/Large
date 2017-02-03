const express = require('express');
const router = express.Router()
const User = require('../models/user')
const request = require('request');


router.get('/', (req, res, next) => {
  res.render('user');
  // res.send('User Page')
})

router.get('/:id', (req, res, next) => {
  const rndId = req.params
  const access_token = req.session.access_token;
  const url = 'https://api.github.com/user';
  const options = {
    method: 'GET',
    url: url,
    headers: {
      'Authorization': `token ${access_token}`,
      'User-Agent': 'Large'
    }
  }

    request(options, (err, response, body) => {
    const userinfo = JSON.parse(body);
    console.log(userinfo)
    req.session.user = userinfo;
    res.render('user', {user: userinfo}, (err, html) => {
      res.send(html)
    });
  })
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

