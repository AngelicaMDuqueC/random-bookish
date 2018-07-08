import '../../scss/base.scss'
import style from '../../scss/test.scss'

import Message from '../../components/Message/Message'

const h1 = document.createElement('h1')
h1.innerHTML = 'Hello Vanilla Shopping Car'
h1.className = style.heading

document.body.appendChild(h1)

export default function Home({ message }) {
  return `Hello from Home ${Message(message)}`
}
