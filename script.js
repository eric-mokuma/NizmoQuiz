const slidePage = document.querySelector('.slidepage')
const firstNextBtn = document.querySelector('.nextBtn')
const nextBtnSec = document.querySelector('.nextBtn1')
const nextBtnThird = document.querySelector('.nextBtn2')
const nextBtnFourth = document.querySelector('.nextBtn3')
const nextBtnFifth = document.querySelector('.nextBtn4')
const nextBtnSeventh = document.querySelector('.nextBtn5')
const nextBtnEighth = document.querySelector('.nextBtn6')
const nextBtnNineth = document.querySelector('.nextBtn7')
const nextBtnTenth = document.querySelector('.nextBtn8')
const nextBtnEleventh = document.querySelector('.nextBtn9')

// Declare a new variable for the sound effect for both correct and incorrect answers.

let goodAnswer = new Audio('happy.wav')
let noNo = new Audio('no-no-no.wav')

// Set the quiz question and advance the slide to the next question.
// --- 1page answer respond
firstNextBtn.addEventListener('click', function () {
  const inputValue = document.querySelectorAll('.slidepageinput')[0].value
  if (inputValue.trim().toLowerCase() === 'yellow') {
    slidePage.style.marginLeft = '-25%'
    goodAnswer.play()
  } else {
    noNo.play()
  }
})

// --- 2page answer respond
nextBtnSec.addEventListener('click', function () {
  const inputValue = document.querySelectorAll('.slidepageinput')[1].value
  if (inputValue.trim().toLowerCase() === '0') {
    slidePage.style.marginLeft = '-50%'
    goodAnswer.play()
  } else {
    noNo.play()
  }
})

// --- 3page answer respond
nextBtnThird.addEventListener('click', function () {
  const inputValue = document.querySelectorAll('.slidepageinput')[2].value
  if (inputValue.trim().toLowerCase() === 'ocean') {
    slidePage.style.marginLeft = '-75%'
    goodAnswer.play()
  } else {
    noNo.play()
  }
})

// --- 4page answer respond
nextBtnFourth.addEventListener('click', function () {
  const inputValue = document.querySelectorAll('.slidepageinput')[3].value
  if (inputValue.trim().toLowerCase() === '20') {
    slidePage.style.marginLeft = '-100%'
    goodAnswer.play()
  } else {
    noNo.play()
  }
})

// --- 5page answer respond
nextBtnFifth.addEventListener('click', function () {
  const inputValue = document.querySelectorAll('.slidepageinput')[4].value
  if (inputValue.trim().toLowerCase() === 'honey') {
    slidePage.style.marginLeft = '-125%'
    goodAnswer.play()
  } else {
    noNo.play()
  }
})

// --- 6page answer respond
nextBtnSeventh.addEventListener('click', function () {
  const inputValue = document.querySelectorAll('.slidepageinput')[5].value
  if (inputValue.trim().toLowerCase() === '19') {
    slidePage.style.marginLeft = '-150%'
    goodAnswer.play()
  } else {
    noNo.play()
  }
})

// --- 7page answer respond

nextBtnEighth.addEventListener('click', function () {
  const inputValue = document.querySelectorAll('.slidepageinput')[6].value
  if (inputValue.trim().toLowerCase() === '3') {
    slidePage.style.marginLeft = '-175%'
    goodAnswer.play()
  } else {
    noNo.play()
  }
})

// --- 8page answer respond
nextBtnNineth.addEventListener('click', function () {
  const inputValue = document.querySelectorAll('.slidepageinput')[7].value
  if (inputValue.trim().toLowerCase() === '8') {
    slidePage.style.marginLeft = '-200%'
    goodAnswer.play()
  } else {
    noNo.play()
  }
})

// --- 9page answer respond
nextBtnTenth.addEventListener('click', function () {
  const inputValue = document.querySelectorAll('.slidepageinput')[8].value
  if (inputValue.trim().toLowerCase() === '7') {
    slidePage.style.marginLeft = '-225%'
    goodAnswer.play()
  } else {
    noNo.play()
  }
})

// --- 10page answer respond
nextBtnEleventh.addEventListener('click', function () {
  const inputValue = document.querySelectorAll('.slidepageinput')[9].value
  if (inputValue.trim().toLowerCase() === 'giraffe') {
    slidePage.style.marginLeft = '-250%'
    goodAnswer.play()
    confetti()
  } else {
    noNo.play()
  }
})

// confetti

function confetti() {
  let duration = 15 * 1000
  let animationEnd = Date.now() + duration
  let defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 }

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min
  }

  let interval = setInterval(function () {
    let timeLeft = animationEnd - Date.now()

    if (timeLeft <= 0) {
      return clearInterval(interval)
    }

    let particleCount = 50 * (timeLeft / duration)
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
    })
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
    })
  }, 250)
}
