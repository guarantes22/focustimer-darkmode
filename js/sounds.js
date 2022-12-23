export default function(){
  const cardForest = new Audio(/sounds/Floresta.wav)
  const cardRain = new Audio(/sounds/Chuva.wav)
  const cardCoffe = new Audio(/sounds/Cafeteira.wav)
  const cardFire = new Audio(/sounds/Lareira.wav)

  return{
    cardForest,
    cardRain,
    cardCoffe,
    cardFire
  }
}