import './style.css'
import mainTopFunc from './js/top'
import mainFunc from './js/main'
import menuFunc from './js/menu'
import aboutFunc from './js/about'

const content = document.getElementById('content')

const mainTop = mainTopFunc()
content.appendChild(mainTop)

const divMainMid = mainFunc()
content.appendChild(divMainMid)

const home = document.getElementById('home')
home.addEventListener('click', () => {
	while (content.childNodes.length !== 2) {
		console.log(content.childNodes.length)
		content.removeChild(content.lastChild)
	}
	const divMainMid = mainFunc()
	content.appendChild(divMainMid)
})

const menu = document.getElementById('menu')
menu.addEventListener('click', () => {
	while (content.childNodes.length !== 2) {
		console.log(content.childNodes.length)
		content.removeChild(content.lastChild)
	}
	const menu = menuFunc()
	content.appendChild(menu)
})

const about = document.getElementById('about')
about.addEventListener('click', () => {
	while (content.childNodes.length !== 2) {
		console.log(content.childNodes.length)
		content.removeChild(content.lastChild)
	}
	const about = aboutFunc()
	content.appendChild(about)
})