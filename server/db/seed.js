const client = require("./client")
const {users, recipes, ingredients, instructions} = require("./seedData")

const dropTables = async () => {
console.log("dropping instructions...")
const dropInstructionsQuery = "DROP TABLE IF EXISTS instructions;"
await client.query(dropInstructionsQuery)
console.log("instructions dropped")
console.log("dropping ingredients")
await client.query("DROP TABLE IF EXISTS ingredients;")
console.log("ingredients dropped")
console.log("dropping favorites")
await client.query("DROP TABLE IF EXISTS favorites;")
console.log("favorites dropped")
console.log("dropping recipes")
await client.query("DROP TABLE IF EXISTS recipes;")
console.log("recipes dropped")
console.log("dropping users")
await client.query("DROP TABLE IF EXISTS users;")
console.log("users dropped")
}

const createTables = () => {

}

const populateTables = () => {

}