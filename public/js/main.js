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
  if (title === '' || content === '') return console.log('blank fields')
  var data = {
    name: "Big Boy",
    post: {
      title: title,
      content: content
    }
  }
  $.post('/user', data, function(data) {
    // console.log(data)
    // $('ul').append(title)
  })
  location.reload();

})
