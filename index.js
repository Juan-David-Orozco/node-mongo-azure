const express = require("express")
const ejs = require("ejs")
const path = require("path")

const app = express()

/* Settings */
app.set("view engine", "ejs")
app.set('views', path.join(__dirname, 'views'))

/* Routes */
//app.get('/', (req, res) => res.send("Hello world"))

app.get('/api/users', (req, res) => res.json([{name: 'ryan'}, {name: 'joe'}]))

app.get('/profile', (req, res) => {
  res.render('profile', {name: 'juan', age: 29})
})

/* Static Files */
app.use(express.static('public'))

/* Run Server */
app.listen(process.env.PORT || 4000)
console.log("Server on port", process.env.PORT || 4000)