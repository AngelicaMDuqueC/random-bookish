import style from './style.scss'
import withHooks from '../../lib/withHooks'

function Message(message) {
  return `
    <h2 class="${style.heading}">${message}</h2>
  `
}

export default withHooks({
  didMount(root) {
    // eslint-disable-next-line no-console
    console.log('Message did mount', root)
  },
})(Message)
