const express = require("express")

const app = express()

app.get('/', (req, res) => res.send("Hello world"))

app.listen(process.env.PORT || 4000)
console.log("Server on port", process.env.PORT || 4000)