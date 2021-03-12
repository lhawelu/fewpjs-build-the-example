// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const likeButtons = document.querySelectorAll('.like-glyph')
likeButtons.textContent = EMPTY_HEART
const errorModal = document.querySelector('#modal')
for (const likeButton of likeButtons) {
  likeButton.addEventListener('click', e => {
    if (likeButton.textContent === EMPTY_HEART) {
      mimicServerCall(e)
      .then((e) => {
        likeButton.classList.add('activated-heart')
        likeButton.textContent = FULL_HEART
      })
      .catch(error => {
        errorModal.classList.remove('hidden')
        errorModal.textContent = 'Error -' + error
        setTimeout(() => {
          errorModal.classList.add('hidden')
        }, 5000)
      })
    } else {
      likeButton.classList.remove('activated-heart')
      likeButton.textContent = EMPTY_HEART
    }
  })
}


//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
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
