const express = require('express');
const server = express()
const path = require('path')
const pages = require('./pages.js')

server

.use(express.static('public'))

.set('views',path.join(__dirname,'views'))
.set('view engine','hbs')

.get('/',pages.index)
.get('/schools',pages.schools)
.get('/school',pages.school)
.get('/create-school',pages.createSchool)

server.listen(8080)