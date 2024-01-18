const { Client } = require('pg')
const dbName = "drinksrecipes"
const host = process.env.DB_URL || `postgres://localhost:54321/${dbName}`
const client = new Client(host)

module.exports = client