import createHistory from 'history/createBrowserHistory'
import router from './routes/router'

const history = createHistory()

const mainRouter = document.createElement('div')
document.body.appendChild(mainRouter)

history.listen(location => {
  router.resolve({ pathname: location.pathname }).then(({ component }) => {
    mainRouter.innerHTML = component({ message: 'hola from listener router' })
  })
})

router
  .resolve({ pathname: history.location.pathname })
  .then(({ component }) => {
    mainRouter.innerHTML = component({ message: 'hola first time router' })
  })
