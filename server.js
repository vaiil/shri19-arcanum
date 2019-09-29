const express = require('express')

const app = express()

app.use('/', express.static('dist'))

app.listen(3000)

console.log('Server started on 3000 port')
console.log('Open http://localhost:3000/files.html')
