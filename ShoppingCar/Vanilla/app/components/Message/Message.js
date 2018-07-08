import style from './style.scss'

export default function Message(message) {
  return `
    <h2 class="${style.heading}">${message}</h2>
  `
}
