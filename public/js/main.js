//event listeners
$('#login').on('click', function(evt) {
  $.get('/login', (req, res) => {
    console.log('redirectin')
  })
})

$('#submit').on('click', function(evt) {
  console.log('clicked')
  var title = $('.titleText').val()
  var content = $('.contentText').val()
  var data = {
    name: "Big Boy",
    post: {
      title: 'dj test',
      content: `dj another one`
    }
  };
  $.post('/user', function(data) {
    console.log(data)
    res.send('posted')
  })

})
