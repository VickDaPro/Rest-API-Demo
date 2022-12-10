const express = require('express')
const dotend = require('dotenv').config()
const {errorHandler} = require("./middleware/errorMiddleware")
const port = process.env.PORT || 8000

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/students', require('./routes/studentRoutes'))

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))