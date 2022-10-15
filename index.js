const express = require("express")
const ejs = require("ejs")
const path = require("path")
const { connectDB } = require("./db")
const User = require("./models/User")

connectDB()
const app = express()

/* Settings */
app.set("view engine", "ejs")
app.set('views', path.join(__dirname, 'views'))

/* Routes */
//app.get('/', (req, res) => res.send("Hello world"))

app.get('/api/users', async (req, res) => {
  const users = await User.find()
  res.json(users)
})

app.get('/profile', (req, res) => {
  res.render('profile', {name: 'juan', age: 29})
})

/* Static Files */
app.use(express.static('public'))

/* Run Server */
app.listen(process.env.PORT || 4000)
console.log("Server on port", process.env.PORT || 4000)