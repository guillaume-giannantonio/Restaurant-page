import './style.css'
import mainTopFunc from './js/top'
import mainFunc from './js/main'
import menuFunc from './js/menu'

const content = document.getElementById('content')

const mainTop = mainTopFunc()
content.appendChild(mainTop)

const menu = menuFunc()
content.appendChild(menu)

//const divMainMid = mainFunc()
//content.appendChild(divMainMid)