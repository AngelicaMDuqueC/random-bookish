import { interval, fromEvent } from 'rxjs'
import { switchMap, startWith, map } from 'rxjs/operators'
import './scss/base.scss'
import style from './scss/test.scss'
import router from './routes/router'

const h1 = document.createElement('h1')
const span = document.createElement('span')
h1.innerHTML = 'Hello Vanilla Shopping Car '
h1.className = style.heading

h1.appendChild(span)

const documentClick$ = fromEvent(document, 'click')

const counter$ = documentClick$.pipe(
  startWith(null),
  switchMap(() =>
    interval(500).pipe(
      map(i => i + 1),
      startWith(0),
    ),
  ),
  startWith(0),
)

counter$.subscribe(value => {
  span.innerHTML = value
})

document.body.appendChild(h1)

router.resolve('/post').then(html => {
  document.body.innerHTML = html
})
