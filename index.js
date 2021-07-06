const express = require('express')
const app = express()
const PORT = 8080
const db = require("./models")
const cors = require('cors')

const { User } = require("./models")
const userRoute = require('./routes/User')

app.use(express.json())
app.use(cors())

app.use("/user", userRoute)

db.sequelize.sync().then((req) => {
    app.listen(PORT, console.log(`Running on port: ${PORT}...`))
})
