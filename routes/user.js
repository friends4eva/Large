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
    name: req.session.sessionId,
    post: {
      title: req.body.post.title,
      content: req.body.post.content
    }
  }

  post.access_token = req.session.access_token;
  req.session.post = post;

  // req.session.post = [];
  //   re.push(post);


  let sessionPost = req.session.post
  let blogger = new User(sessionPost);
  blogger.save();
  // console.log('req session', req.session)
  // console.log("Session Post OBJECT!!!!!", req.session.post)
  // console.log("Session inceptio OBJECT!!!!!", req.session.post.post)
  // console.log("Session inception title OBJECT!!!!!", req.session.post.post.title)

  User.find()
    .then(function(data) {
      console.log(data)
      res.render('user', {items:data});
    })
// res.render('user', {user: req.session})
})

// user {
//   cookie:
//    { path: '/',
//      _expires: null,
//      originalMaxAge: null,
//      httpOnly: true },
//   post: [
//      { name: undefined,
//        post: { title: 'ritwick', content: 'maybe' },
//        access_token: undefined } },
//      { name: undefined,
//        post: { title: 'ritwick', content: 'maybe' },
//        access_token: undefined } }
//      ]

module.exports = router

//




