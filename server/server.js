const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 8080
const client = require('./db/client')
const recipeRoutes = require("./routes/recipeRoutes")
const cors = require("cors")

app.use(cors())
app.use(morgan("combined"))
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use("/recipes", recipeRoutes)

client.connect().then(()=>{
    console.log("DB Connected")
    app.listen(port, () => {
      console.log(`App listening on port ${port}`)
    })
})
