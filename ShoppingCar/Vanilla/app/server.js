const express = require('express')
const fs = require('fs')
const path = require('path')

const app = express()

function readFilePromise(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) reject(err)

      resolve(data)
    })
  })
}

app.get(['/', '/posts'], async (req, res) => {
  const html = await readFilePromise(path.resolve('./dist/index.html'))

  res.send(html)
})

app.use(express.static('dist'))

// eslint-disable-next-line no-console
console.log('listening 9000')
app.listen(9000)
