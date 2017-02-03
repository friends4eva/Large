const express = require('express');
const router = express.Router()
const User = require('../models/user')
const request = require('request');


router.get('/', (req, res, next) => {
  res.render('user');
  // res.send('User Page')
})

router.get('/:userName', (req, res, next) => {
  const rndId = req.params
  req.session.sessionId = req.params.userName;
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
    req.session.user = userinfo;
    res.render('user', {user: req.session});
  })
})

router.post('/', (req, res, next) => {
  var post = {
    name: req.body.name,
    post: {
      title: req.body.post.title,
      content: req.body.post.content
    }
  }


  req.session.post = post;
  let sessionPost = req.session.post
  let blogger = new User(sessionPost);
  blogger.save();

  console.log(req.session)
res.render('user', {user: req.session})
})

module.exports = router

//




