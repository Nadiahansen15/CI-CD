const express = require('express')
const app = express()
const PORT = 3000

app.use(express.json())

app.post('/users', (req, res) => {
  const { username, password } = req.body

  if (!username || !password) {
    res.status(400).json({ msg: 'Missing username or password' })
  }
  res.status(200).json({ token: '1337' })
})

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Server runnning on port ${PORT}`)
  })
}

module.exports = app
