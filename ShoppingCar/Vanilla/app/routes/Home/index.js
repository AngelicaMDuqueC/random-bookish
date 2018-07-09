import '../../scss/base.scss'
import style from '../../scss/test.scss'

import Message from '../../components/Message/Message'
import withHooks from '../../lib/withHooks'

const h1 = document.createElement('h1')
h1.innerHTML = 'Hello Vanilla Shopping Car'
h1.className = style.heading

document.body.appendChild(h1)

function Home({ message }) {
  return `<div>Hello from Home ${Message(message)}</div>`
}

export default withHooks({
  root: true,
  didMount(root) {
    // eslint-disable-next-line no-console
    console.log('Home did mount', root)
  },
})(Home)
