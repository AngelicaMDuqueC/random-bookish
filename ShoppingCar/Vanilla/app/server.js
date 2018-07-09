const express = require('express')
const fs = require('fs')
const path = require('path')

const app = express()

const HTML = fs.readFileSync(path.resolve('./dist/index.html'), {
  encoding: 'utf8',
})

app.use(express.static('dist'))

app.get(['/', '/posts'], (req, res) => {
  res.send(HTML)
})

app.get('*', (req, res) => {
  res.send(
    `
    <!DOCTYPE html>
    <html style="display:flex;height:100%;background-color:#efefef">
    <body style="display:flex;justify-content:center;flex:1;align-items: center;">
      <h1 style="font-family:Helvetica,sans-serif;color:#333">404: Page not found</h1>
    </body>
    </html>
    `,
    404,
  )
})

const server = app.listen(9000, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running at http://localhost:${server.address().port}`)
})
