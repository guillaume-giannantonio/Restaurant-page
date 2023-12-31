import logoImg from '../assets/img/logo.png';

export default function top() {
	const mainTop = document.createElement('div')
	mainTop.classList.add('main-top')

	const header = document.createElement('header')

	const logo = new Image()
	logo.src = logoImg

	header.appendChild(logo)

	const home = document.createElement('h3')
	home.textContent = 'Home'
	home.id = 'home'
	const menu = document.createElement('h3')
	menu.id = 'menu'
	menu.textContent = 'Menu'
	const about = document.createElement('h3')
	about.id = 'about'
	about.textContent = 'About'
	const divHeaderMid = document.createElement('div')
	divHeaderMid.classList.add('header-mid')
	divHeaderMid.appendChild(home)
	divHeaderMid.appendChild(menu)
	divHeaderMid.appendChild(about)

	header.appendChild(divHeaderMid)

	const divCommands = document.createElement('div')
	divCommands.textContent = 'Commands'

	header.appendChild(divCommands)

	mainTop.appendChild(header)

	return mainTop
}