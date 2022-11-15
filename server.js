const fs = require('fs')
const path = require('path')
const express = require('express')
const app = express()
const port = 3000
let notesData = require('./db/db.json')
const apiRoutes = require('./routes/api.js')
const pageRoutes = require('./routes/page.js')

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use('/api', apiRoutes)
app.use('/', pageRoutes)



app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})