const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')


// Controllers
const profilesRouter = require('./controllers/profiles')
const testJWTRouter = require('./controllers/test-jwt')
const usersRouter = require('./controllers/users')
const hootsRouter = require('./controllers/hoots.js')


//MIDDLEWARE
app.use(express.json())
app.use(cors())


// Routes go here
app.use('/users', usersRouter)
app.use('/hoots', hootsRouter)


// app.use('/test-jwt', testJWTRouter)
// app.use('/profiles', profilesRouter)


mongoose.connect(process.env.MONGODB_URI)

mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`)
})

app.listen(3000, () => {
  console.log('The express app is ready!')
})