import './scss/base.scss'
import style from './scss/test.scss'

const h1 = document.createElement('h1')
h1.innerHTML = 'Hello Vanilla Shopping Car'
h1.className = style.heading

document.body.appendChild(h1)
