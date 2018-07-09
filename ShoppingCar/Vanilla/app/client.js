import createHistory from 'history/createBrowserHistory'
import router from './routes/router'

const history = createHistory()

const container = document.createElement('div')
document.body.appendChild(container)

history.listen(location => {
  router.resolve({ pathname: location.pathname }).then(({ component }) => {
    const { html, didMount } = component({
      message: 'hola from listener router',
    })

    container.innerHTML = html

    didMount(container.firstElementChild)
  })
})

router
  .resolve({ pathname: history.location.pathname })
  .then(({ component }) => {
    const { html, didMount } = component({
      message: 'hola from listener router',
    })

    container.innerHTML = html

    didMount(container.firstElementChild)
  })
