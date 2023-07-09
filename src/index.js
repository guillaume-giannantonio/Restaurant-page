import './style.css'
import mainTopFunc from './js/top'
import mainFunc from './js/main'
import menuFunc from './js/menu'
import aboutFunc from './js/about'

const content = document.getElementById('content')

const mainTop = mainTopFunc()
content.appendChild(mainTop)

//const menu = menuFunc()
//content.appendChild(menu)

//const divMainMid = mainFunc()
//content.appendChild(divMainMid)

const about = aboutFunc()
content.appendChild(about)