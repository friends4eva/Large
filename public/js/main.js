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
  var template =
    `<ul class="center card blue-grey lighten-3" style="margin: 50px 100px 50px 100px">
    <li>Title: ${title}</li>
    <li>Content: ${content}</li>
    <button id="edit" class="btn waves-effect waves-light">Edit</button>
    <button id="delete" class="btn waves-effect waves-light">Delete</button>
  </ul>`;

//   `<ul>
//       <li>Title: ${title} </li>
//       <li>Content: ${content}</li>
//       <button id="edit">Edit</button>
//       <button id="delete">Delete</button>
// </ul>`

  $.post('/user', data, function(data) {
    // console.log(data)
    $('#allPosts').append(template)
  })
  // location.reload();

})
