const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

// Up Up Down Down Left Right Left Right B A
// We have an array of key codes (event.which)
// Add an event listener somewhere so that when we press this, something happens
// We need to keep track of where we are in the combo

function onKeyDownHandler(event) {
      if (tracker === code.length){
      event.preventDefault()
      return
    }
    if (event.which === code[tracker]) {
      console.log('Success!')
      tracker++
      if (tracker === code.length) {
        alert('You found it!')
      }
    }
    else {
      console.log('youve messed up!!!')
      tracker = 0
    }
}

function init() {
  // Write your JavaScript code inside the init() function
  // Tracker keeps track of where we are in the array
  let tracker = 0
  const body = document.querySelector('body')
  body.addEventListener('keydown', (event) => {
  })
}

// Need to call the function below
init()
