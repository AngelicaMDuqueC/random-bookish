import './scss/base.scss'
import style from './scss/test.scss'

import Message from './components/Message/Message'

const h1 = document.createElement('h1')
h1.innerHTML = 'Hello Vanilla Shopping Car'
h1.className = style.heading

const div = document.createElement('div')
div.innerHTML = Message('Hola mundo')

document.body.appendChild(h1)
document.body.appendChild(div)
