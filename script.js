const frukost = [
  'Ägg',
  'Smörgås',
  'Pannkakor',
  'Macka',
  'Kaffe',
  'Te',
  'Mjölk',
  'Juice',
  'Marmelad',
  'Nutella',
  'Kex',
  'Korv',
  'Bröd',
  'Pasta',
  'Köttbullar',
  'Köttfärssås',
  'Köttfärslimpa',
]

let randomNow = []
function randomFood() {
  if (randomNow.length === 0) {
    randomNow = [...frukost]
  }
  const random = Math.floor(Math.random() * randomNow.length)
  const food = randomNow[random]
  randomNow.splice(random, 1)

  console.log('left until reset', randomNow.length)
  return food
}

const generateButton = document.getElementById('generate')
const randomFrukost = document.getElementById('random-frukost')

randomFrukost.innerText = randomFood()
console.log(randomFrukost)

generateButton.addEventListener('click', () => {
  randomFrukost.innerText = randomFood()

  console.log(randomFrukost.innerHtml)
})
