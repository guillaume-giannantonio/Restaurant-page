import './style.css'
import mainTopFunc from './js/top'
import mainFunc from './js/main'

const content = document.getElementById('content')

const mainTop = mainTopFunc()
content.appendChild(mainTop)

const divMainMid = mainFunc()
content.appendChild(divMainMid)