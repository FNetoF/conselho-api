const express = require('express')
const routes = require('./routes')

const app = express()
const port = 9090

app.use(express.json())
app.use(routes)

app.listen(port, () => console.log('\nSever rodando http://localhost:9090\n'))
