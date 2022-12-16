const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')
const forms = require('./routes/forms')
const auth = require('./routes/auth')
const student = require('./routes/student')
const course = require('./routes/course')
const staff = require('./routes/staff')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser())
app.use(fileUpload());

app.use(express.json())

app.use('/api/v1', student)
app.use('/api/v1', course)
app.use('/api/v1', staff)








module.exports = app