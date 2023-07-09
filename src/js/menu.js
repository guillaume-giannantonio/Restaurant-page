import main from './main';

export default function () {
	const mainMenu = document.createElement('div')
	mainMenu.classList.add('menu-mid')

	const h1 = document.createElement('h1')
	h1.textContent = 'The Menu'

	const divCardRowMenu = document.createElement('div')
	divCardRowMenu.classList.add('card-row-menu')

	const card1 = document.createElement('div')
	card1.classList.add('card')
	const card1Top = document.createElement('div')
	card1Top.classList.add('card-top')
	card1Top.classList.add('sushi-saumon')
	const card1BottomMenu = document.createElement('div')
	card1BottomMenu.classList.add('card-bottom-menu')
	const h41 = document.createElement('h4')
	h41.textContent = 'SUSHIS SAUMON'
	const select1 = document.createElement('div')
	select1.classList.add('select')
	select1.textContent = '>'

	card1BottomMenu.appendChild(h41)
	card1BottomMenu.appendChild(select1)

	card1.appendChild(card1Top)
	card1.appendChild(card1BottomMenu)

	const card2 = document.createElement('div')
	card2.classList.add('card')
	const card2Top = document.createElement('div')
	card2Top.classList.add('card-top')
	card2Top.classList.add('boule-de-riz')
	const card2BottomMenu = document.createElement('div')
	card2BottomMenu.classList.add('card-bottom-menu')
	const h42 = document.createElement('h4')
	h42.textContent = 'BOULES DE RIZ'
	const select2 = document.createElement('div')
	select2.classList.add('select')
	select2.textContent = '>'

	card2BottomMenu.appendChild(h42)
	card2BottomMenu.appendChild(select2)

	card2.appendChild(card2Top)
	card2.appendChild(card2BottomMenu)

	const card3 = document.createElement('div')
	card3.classList.add('card')
	const card3Top = document.createElement('div')
	card3Top.classList.add('card-top')
	card3Top.classList.add('sushi-saum')
	const card3BottomMenu = document.createElement('div')
	card3BottomMenu.classList.add('card-bottom-menu')
	const h43 = document.createElement('h4')
	h43.textContent = 'SUSHI SAUMON'
	const select3 = document.createElement('div')
	select3.classList.add('select')
	select3.textContent = '>'

	card3BottomMenu.appendChild(h43)
	card3BottomMenu.appendChild(select3)

	card3.appendChild(card3Top)
	card3.appendChild(card3BottomMenu)

	const card4 = document.createElement('div')
	card4.classList.add('card')
	const card4Top = document.createElement('div')
	card4Top.classList.add('card-top')
	card4Top.classList.add('sushi-vegetale')
	const card4BottomMenu = document.createElement('div')
	card4BottomMenu.classList.add('card-bottom-menu')
	const h44 = document.createElement('h4')
	h44.textContent = 'SUSHI VEGETALE'
	const select4 = document.createElement('div')
	select4.classList.add('select')
	select4.textContent = '>'

	card4BottomMenu.appendChild(h44)
	card4BottomMenu.appendChild(select4)

	card4.appendChild(card4Top)
	card4.appendChild(card4BottomMenu)

	const card5 = document.createElement('div')
	card5.classList.add('card')
	const card5Top = document.createElement('div')
	card5Top.classList.add('card-top')
	card5Top.classList.add('multi-vegetale')
	const card5BottomMenu = document.createElement('div')
	card5BottomMenu.classList.add('card-bottom-menu')
	const h45 = document.createElement('h4')
	h45.textContent = 'MULTI VEGETALE'
	const select5 = document.createElement('div')
	select5.classList.add('select')
	select5.textContent = '>'

	card5BottomMenu.appendChild(h45)
	card5BottomMenu.appendChild(select5)

	card5.appendChild(card5Top)
	card5.appendChild(card5BottomMenu)

	const card6 = document.createElement('div')
	card6.classList.add('card')
	const card6Top = document.createElement('div')
	card6Top.classList.add('card-top')
	card6Top.classList.add('multi-viande')
	const card6BottomMenu = document.createElement('div')
	card6BottomMenu.classList.add('card-bottom-menu')
	const h46 = document.createElement('h4')
	h46.textContent = 'MULTI VIANDE'
	const select6 = document.createElement('div')
	select6.classList.add('select')
	select6.textContent = '>'

	card6BottomMenu.appendChild(h46)
	card6BottomMenu.appendChild(select6)

	card6.appendChild(card6Top)
	card6.appendChild(card6BottomMenu)

	const card7 = document.createElement('div')
	card7.classList.add('card')
	const card7Top = document.createElement('div')
	card7Top.classList.add('card-top')
	card7Top.classList.add('soupe-miso')
	const card7BottomMenu = document.createElement('div')
	card7BottomMenu.classList.add('card-bottom-menu')
	const h47 = document.createElement('h4')
	h47.textContent = 'SOUPE MISO'
	const select7 = document.createElement('div')
	select7.classList.add('select')
	select7.textContent = '>'

	card7BottomMenu.appendChild(h47)
	card7BottomMenu.appendChild(select7)

	card7.appendChild(card7Top)
	card7.appendChild(card7BottomMenu)

	const card8 = document.createElement('div')
	card8.classList.add('card')
	const card8Top = document.createElement('div')
	card8Top.classList.add('card-top')
	card8Top.classList.add('plateau-sushi')
	const card8BottomMenu = document.createElement('div')
	card8BottomMenu.classList.add('card-bottom-menu')
	const h48 = document.createElement('h4')
	h48.textContent = 'PLATEAU SUSHI'
	const select8 = document.createElement('div')
	select8.classList.add('select')
	select8.textContent = '>'

	card8BottomMenu.appendChild(h48)
	card8BottomMenu.appendChild(select8)

	card8.appendChild(card8Top)
	card8.appendChild(card8BottomMenu)


	divCardRowMenu.appendChild(card1)
	divCardRowMenu.appendChild(card2)
	divCardRowMenu.appendChild(card3)
	divCardRowMenu.appendChild(card4)
	divCardRowMenu.appendChild(card5)
	divCardRowMenu.appendChild(card6)
	divCardRowMenu.appendChild(card7)
	divCardRowMenu.appendChild(card8)
	mainMenu.appendChild(h1)
	mainMenu.appendChild(divCardRowMenu)

	return mainMenu
}