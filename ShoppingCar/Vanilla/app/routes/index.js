import Home from './Home'

const routes = [
  {
    path: '/',
    action: () => ({ component: Home }),
  },
  {
    path: '/posts',
    action: () => ({ component: () => '<h1>Post</h1>' }),
  },
]

export default routes
