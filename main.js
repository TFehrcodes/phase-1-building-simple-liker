// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

const heartPlace = document.querySelectorAll('.like-glyph')
for (const heart of heartPlace) {
  heart.addEventListener('click', (e) => {
    const like = e.target
    mimicServerCall()
    .then(function (response) {
      if (like.innerText === EMPTY_HEART) {
        like.innerText = FULL_HEART
        like.className = 'activated-heart'
      }
      else {
        like.innerText = EMPTY_HEART
        like.className = ''
      }
      
    })
    .catch(function (error) {
    let modal = document.getElementById('modal')
    modal.className = ''
    modal.innerText = error
    setTimeout(function (){
    modal.className = 'hidden'
    }, 3000)
    })
  })
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
