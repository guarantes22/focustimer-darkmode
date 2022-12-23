const buttonplay = document.querySelector('.play')
const buttonplaydark = document.querySelector('.playdark')
const buttonstop = document.querySelector('.stop')
const buttonstopdark = document.querySelector('.stopdark')
const buttonmais = document.querySelector('.mais')
const buttonmaisdark = document.querySelector('.maisdark')
const buttonmenos = document.querySelector('.menos')
const buttonmenosdark = document.querySelector('.menosdark')

const card1 = document.querySelector('.card1')
const card1b = document.querySelector('.card1b')
const card2 = document.querySelector('.card2')
const card2b = document.querySelector('.card2b')
const card3 = document.querySelector('.card3')
const card3b = document.querySelector('.card3b')
const card4 = document.querySelector('.card4')
const card4b = document.querySelector('.card4b')

const volume1 = document.querySelector('#vol-control')
const volume2 = document.querySelector('#vol-control2')
const volume3 = document.querySelector('#vol-control3')
const volume4 = document.querySelector('#vol-control4')

const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

const cafeteria = new Audio("https://github.com/guarantes22/sounds/blob/009f1bddfe1e05c340dd41889b3ad234ec1899a2/Cafeteria.wav?raw=true")
const chuva = new Audio("https://github.com/guarantes22/sounds/blob/009f1bddfe1e05c340dd41889b3ad234ec1899a2/Chuva.wav?raw=true")
const floresta = new Audio("https://github.com/guarantes22/sounds/blob/009f1bddfe1e05c340dd41889b3ad234ec1899a2/Floresta.wav?raw=true")
const fire = new Audio("https://github.com/guarantes22/sounds/blob/009f1bddfe1e05c340dd41889b3ad234ec1899a2/Lareira.wav?raw=true")

const sol = document.querySelector('.sol')
const lua = document.querySelector('.lua')
const conteudo = document.querySelector('.conteudo')
const dark = document.querySelector('.dark')

sol.addEventListener('click', () =>{
  lua.classList.remove('hide')
  sol.classList.add('hide')
  conteudo.classList.add('dark')
  buttonplay.classList.add('hide')
  buttonplaydark.classList.remove('hide')
  buttonstop.classList.add('hide')
  buttonstopdark.classList.remove('hide')
  buttonmais.classList.add('hide')
  buttonmaisdark.classList.remove('hide')
  buttonmenos.classList.add('hide')
  buttonmenosdark.classList.remove('hide')
})
lua.addEventListener('click', () =>{
  lua.classList.add('hide')
  sol.classList.remove('hide')
  conteudo.classList.remove('dark')
  buttonplay.classList.remove('hide')
  buttonplaydark.classList.add('hide')
  buttonstop.classList.remove('hide')
  buttonstopdark.classList.add('hide')
  buttonmais.classList.remove('hide')
  buttonmaisdark.classList.add('hide')
  buttonmenos.classList.remove('hide')
  buttonmenosdark.classList.add('hide')
})


function countdown(){
  timerTimeOut = setTimeout(function() {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)
    secondsDisplay.textContent = "00"
    if(minutes <= 0){
      return
    }
    
  if (seconds <= 0){
    seconds = 60
    minutesDisplay.textContent = String(minutes - 1).padStart(2, '0')
  }
  secondsDisplay.textContent = String(seconds - 1).padStart(2, '0')
      
    countdown()
  }, 1000);
  
}
buttonplay.addEventListener('click', function() {
    countdown()
    })
    buttonplaydark.addEventListener('click', function() {
      countdown()
      })

buttonstop.addEventListener('click', () => {
 clearTimeout(timerTimeOut)
})
buttonstopdark.addEventListener('click', () => {
  clearTimeout(timerTimeOut)
 })

buttonmais.addEventListener('click', () =>{
  minutesDisplay.textContent = String(Number(minutesDisplay.textContent) + 5).padStart(2, '0')
})
buttonmaisdark.addEventListener('click', () =>{
  minutesDisplay.textContent = String(Number(minutesDisplay.textContent) + 5).padStart(2, '0')
})

buttonmenos.addEventListener('click', () =>{
     minutesDisplay.textContent = String(minutesDisplay.textContent - 5).padStart(2, '0') 
     if(minutesDisplay <= 0){
      return countdown()
    }
    })
buttonmenosdark.addEventListener('click', () =>{
     minutesDisplay.textContent = String(minutesDisplay.textContent - 5).padStart(2, '0') 
     if(minutesDisplay <= 0){
      return countdown()
    }
    })


    
function setvolume(value){
  floresta.volume = value / 100
  chuva.volume = value / 100
  cafeteria.volume = value / 100
  fire.volume = value / 100
}


card1.addEventListener('click', () =>{
  card1.classList.add('hide')
  card1b.classList.remove('hide')
  floresta.play()
  volume1.oninput = () => setvolume(volume1.value)
  volume1.onchange = () => setvolume(volume1.value)
})

card1b.addEventListener('click', () =>{
  card1.classList.remove('hide')
  card1b.classList.add('hide')
  floresta.pause()
})

card2.addEventListener('click', () =>{
  card2.classList.add('hide')
  card2b.classList.remove('hide')
  chuva.play()
  volume2.oninput = () => setvolume(volume2.value)
  volume2.onchange = () => setvolume(volume2.value)
})
card2b.addEventListener('click', () =>{
  card2.classList.remove('hide')
  card2b.classList.add('hide')
  chuva.pause()
})
card3.addEventListener('click', () =>{
  card3.classList.add('hide')
  card3b.classList.remove('hide')
  cafeteria.play()
  volume3.oninput = () => setvolume(volume3.value)
  volume3.onchange = () => setvolume(volume3.value)
})
card3b.addEventListener('click', () =>{
  card3.classList.remove('hide')
  card3b.classList.add('hide')
  cafeteria.pause()
})
card4.addEventListener('click', () =>{
  card4.classList.add('hide')
  card4b.classList.remove('hide')
  fire.play()
  volume4.oninput = () => setvolume(volume4.value)
  volume4.onchange = () => setvolume(volume4.value)
})
card4b.addEventListener('click', () =>{
  card4.classList.remove('hide')
  card4b.classList.add('hide')
  fire.pause()
})


