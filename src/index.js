// render info on page load
// make button for heart to increment likes
// add new comment

const url = 'http://localhost:3000/images/1';
const profPic = document.querySelector('#card-image');
const profTitle = document.querySelector('#card-title')
let likes = document.querySelector('#like-count');
const commentsForm = document.querySelector('#comment-form')
const comments = document.querySelector('#comments-list')
const likesBtn = document.querySelector('.like-button')
const commentsBtn = document.querySelector('.comment-button')



fetch(url)
  .then(res => res.json())
  .then(renderUser)


function renderUser(user) {
  // console.log(user)
  profPic.src = user.image;
  profTitle.innerText = user.title;
  likes = user.likes;
  comments.innerHTML = ''
  likesBtn.addEventListener('click', addLike)
  function addLike() {
      likes.textContent = `${user.likes ++}`
      console.log(addLike)
  }

  commentsForm.addEventListener('submit', event => {
    event.preventDefault();
    const addComment = document.createElement('li');
    let newComment = event.target.comment.value
    comments.append(newComment)
    event.target.reset()
  })

}

