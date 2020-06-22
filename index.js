const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')
var cors = require('cors')
const port = process.env.PORT || 3000

app.use(cors())

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.get('/', db.getAll)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})

app.get('/dates', db.getDate)
app.get('/cases', db.getNumberOfCases)
app.get('/id', db.getID)
