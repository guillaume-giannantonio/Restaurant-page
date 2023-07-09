import './style.css'
import mainTopFunc from './js/top'

const content = document.getElementById('content')

const mainTop = mainTopFunc()
content.appendChild(mainTop)

const divMainMid = document.createElement('div')
divMainMid.classList.add('main-mid')

const h1 = document.createElement('h1')
h1.textContent = 'Discover this week\'s offers'

divMainMid.appendChild(h1)

const divCardRow = document.createElement('div')
divCardRow.classList.add('card-row')



const card1 = document.createElement('div')
card1.classList.add('card')
const card1Top = document.createElement('div')
card1Top.classList.add('card-top')
card1Top.classList.add('sushi-saumon')
const featureLimited = document.createElement('div')
featureLimited.classList.add('feature')
featureLimited.classList.add('limited')
featureLimited.textContent = 'Limited edition'

card1Top.appendChild(featureLimited)
card1.appendChild(card1Top)

const card1Bottom = document.createElement('div')
card1Bottom.classList.add('card-bottom')
const sushiSaumon = document.createElement('h5')
sushiSaumon.textContent = 'Sushi saumon'
const divAddToCart1 = document.createElement('div')
divAddToCart1.classList.add('add-to-cart')
const price1 = document.createElement('div')
price1.classList.add('price')
const h5piece1 = document.createElement('h5')
h5piece1.textContent = '2 pièces';
const h4price1 = document.createElement('h4')
h4price1.textContent = '4,00€'
const plus = document.createElement('div')
plus.classList.add('plus')
plus.textContent = '+'

card1Bottom.appendChild(sushiSaumon)
price1.appendChild(h5piece1)
price1.appendChild(h4price1)
divAddToCart1.appendChild(price1)
divAddToCart1.appendChild(plus)

card1Bottom.appendChild(divAddToCart1)

card1.appendChild(card1Bottom)





const card2 = document.createElement('div')
card2.classList.add('card')
const card2Top = document.createElement('div')
card2Top.classList.add('card-top')
card2Top.classList.add('sushi-mix')
const featureNew = document.createElement('div')
featureNew.classList.add('feature')
featureNew.classList.add('new')
featureNew.textContent = 'New'

card2Top.appendChild(featureNew)
card2.appendChild(card2Top)

const card2Bottom = document.createElement('div')
card2Bottom.classList.add('card-bottom')
const sushiMix = document.createElement('h5')
sushiMix.textContent = 'Sushi mix'
const divAddToCart2 = document.createElement('div')
divAddToCart2.classList.add('add-to-cart')
const price2 = document.createElement('div')
price2.classList.add('price')
const h5piece2 = document.createElement('h5')
h5piece2.textContent = '1 pièce';
const h4price2 = document.createElement('h4')
h4price2.textContent = '12,00€'
const plus2 = document.createElement('div')
plus2.classList.add('plus')
plus2.textContent = '+'

card2Bottom.appendChild(sushiMix)
price2.appendChild(h5piece2)
price2.appendChild(h4price2)
divAddToCart2.appendChild(price2)
divAddToCart2.appendChild(plus2)

card2Bottom.appendChild(divAddToCart2)

card2.appendChild(card2Bottom)



const card3 = document.createElement('div')
card3.classList.add('card')
const card3Top = document.createElement('div')
card3Top.classList.add('card-top')
card3Top.classList.add('boule-de-riz')
const featureLimited3 = document.createElement('div')
featureLimited3.classList.add('feature')
featureLimited3.classList.add('limited')
featureLimited3.textContent = 'Limited edition'


card3Top.appendChild(featureLimited3)
card3.appendChild(card3Top)

const card3Bottom = document.createElement('div')
card3Bottom.classList.add('card-bottom')
const bouleDeRiz = document.createElement('h5')
bouleDeRiz.textContent = 'Boules de riz'
const divAddToCart3 = document.createElement('div')
divAddToCart3.classList.add('add-to-cart')
const price3 = document.createElement('div')
price3.classList.add('price')
const h5piece3 = document.createElement('h5')
h5piece3.textContent = '2 pièces';
const h4price3 = document.createElement('h4')
h4price3.textContent = '8,00€'
const plus3 = document.createElement('div')
plus3.classList.add('plus')
plus3.textContent = '+'

card3Bottom.appendChild(bouleDeRiz)
price3.appendChild(h5piece3)
price3.appendChild(h4price3)
divAddToCart3.appendChild(price3)
divAddToCart3.appendChild(plus3)

card3Bottom.appendChild(divAddToCart3)

card3.appendChild(card3Bottom)


const card4 = document.createElement('div')
card4.classList.add('card')
const card4Top = document.createElement('div')
card4Top.classList.add('card-top')
card4Top.classList.add('sushi-crevette')
const featureReduction = document.createElement('div')
featureReduction.classList.add('feature')
featureReduction.classList.add('reduction')
featureReduction.textContent = '-30%'

card4Top.appendChild(featureReduction)
card4.appendChild(card4Top)

const card4Bottom = document.createElement('div')
card4Bottom.classList.add('card-bottom')
const sushiCrevette = document.createElement('h5')
sushiCrevette.textContent = 'Sushi crevette'
const divAddToCart4 = document.createElement('div')
divAddToCart4.classList.add('add-to-cart')
const price4 = document.createElement('div')
price4.classList.add('price')
const h5piece4 = document.createElement('h5')
h5piece4.textContent = '3 pièces';
const h4price4 = document.createElement('h4')
h4price4.textContent = '10,00€'
const plus4 = document.createElement('div')
plus4.classList.add('plus')
plus4.textContent = '+'

card4Bottom.appendChild(sushiCrevette)
price4.appendChild(h5piece4)
price4.appendChild(h4price4)
divAddToCart4.appendChild(price4)
divAddToCart4.appendChild(plus4)

card4Bottom.appendChild(divAddToCart4)

card4.appendChild(card4Bottom)




divCardRow.appendChild(card1)
divCardRow.appendChild(card2)
divCardRow.appendChild(card3)
divCardRow.appendChild(card4)
divMainMid.appendChild(divCardRow)
content.appendChild(divMainMid)