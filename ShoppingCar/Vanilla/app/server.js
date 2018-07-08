import express from 'express'
import router from './routes/router'

const app = express()

app.get('*', async (req, res) => {
  const { html } = await router.resolve({
    path: req.path,
  })

  res.send(html)
})
