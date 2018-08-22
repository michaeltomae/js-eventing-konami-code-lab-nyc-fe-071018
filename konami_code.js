const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

// Up Up Down Down Left Right Left Right B A
// We have an array of key codes (event.which)
// Add an event listener somewhere so that when we press this, something happens
// We need to keep track of where we are in the combo

function init() {
  // Write your JavaScript code inside the init() function
  // Tracker keeps track of where we are in the array
  const tracker = 0
  const body = document.querySelector('body')
  body.addEventListener('keydown', (event) => {
    if(event.which === code[tracker]){
      tracker++;
    }
    else {
      tracker = 0;
    }
  })
}

init()

