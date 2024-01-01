const express = require('express')
require('dotenv').config()

const app = express()

const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/hey', (req, res) => {
    res.send("hello Partha")
})

app.get('/login', (req, res) => {
    res.send("<h1>Please log in...</h1>")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})