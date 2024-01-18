const { Client } = require('pg')
const dbName = "drinksrecipes"
const client = new Client(`postgres://localhost:54321/${dbName}`)

module.exports = client