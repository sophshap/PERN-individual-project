const client = require("./client")
const { users, recipes, ingredients, instructions } = require("./seedData")
const { createRecipe } = require("./sqlHelperFunctions/recipes")
const { createIngredient } = require("./sqlHelperFunctions/ingredients")
const { createInstruction } = require("./sqlHelperFunctions/instructions")

const connectDB = () => {
    return client.connect()
}

const dropTables = () => {
    console.log("dropping instructions...")
    const dropInstructionsQuery = "DROP TABLE IF EXISTS instructions;"
    return client.query(dropInstructionsQuery)
        .then((result) => {
            console.log("instructions dropped")
            console.log("dropping ingredients")
            return client.query("DROP TABLE IF EXISTS ingredients;")
        })
        .then((result) => {
            console.log("ingredients dropped")
            console.log("dropping favorites")
            return client.query("DROP TABLE IF EXISTS favorites;")
        })
        .then((result) => {
            console.log("favorites dropped")
            console.log("dropping recipes")
            return client.query("DROP TABLE IF EXISTS recipes;")
        })
        .then((result) => {
            console.log("recipes dropped")
            console.log("dropping users")
            return client.query("DROP TABLE IF EXISTS users;")
        })
        .then((result) => {
            console.log("users dropped")
        })



}

const createTables = async () => {
    const createUsersQuery = `
    CREATE TABLE IF NOT EXISTS users (
    user_id SERIAL PRIMARY KEY,
    first_name VARCHAR NOT NULL,
    last_name VARCHAR NOT NULL,
    username VARCHAR NOT NULL,
    password VARCHAR NOT NULL,
    email VARCHAR NOT NULL
);`
    console.log("creating table users")
    await client.query(createUsersQuery)
    console.log("users created")


    const createRecipesQuery = `
    CREATE TABLE IF NOT EXISTS recipes (
    recipe_id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL,
    type VARCHAR NOT NULL,
    recipe_yield INTEGER NOT NULL,
    description VARCHAR NOT NULL,
    image_url TEXT NOT NULL
);`
    console.log("creating table recipes")
    await client.query(createRecipesQuery)
    console.log("recipes created")


    const createFavoritesQuery = `
    CREATE TABLE IF NOT EXISTS favorites (
    favorite_id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(user_id),
    recipe_id INTEGER REFERENCES recipes(recipe_id)
);`
    console.log("creating table favorites")
    await client.query(createFavoritesQuery)
    console.log("favorites created")

    const createIngredientsQuery = `
    CREATE TABLE IF NOT EXISTS ingredients (
    ingredient_id SERIAL PRIMARY KEY,
    recipe_id INTEGER REFERENCES recipes(recipe_id),
    name VARCHAR NOT NULL,
    amount VARCHAR NOT NULL
);`
    console.log("creating table ingredients")
    await client.query(createIngredientsQuery)
    console.log("ingredients created")


    const createInstructionsQuery = `
    CREATE TABLE IF NOT EXISTS instructions (
    instruction_id SERIAL PRIMARY KEY,
    recipe_id INTEGER REFERENCES recipes(recipe_id),
    description VARCHAR NOT NULL,
    step_number INTEGER NOT NULL
);`
    console.log("creating table instructions")
    await client.query(createInstructionsQuery)
    console.log("instructions created")


}



const populateTables = async () => {

    try {
        console.log("populating recipes")
        const recipePromises = recipes.map((recipe) => {
            return createRecipe(recipe)
        })
        await Promise.all(recipePromises)
        console.log("Populated recipes table!")

        console.log("populating ingredients")
        const ingredientsPromises = ingredients.map((ingredient) => {
            return createIngredient(ingredient)
        })
        await Promise.all(ingredientsPromises)
        console.log("Populated ingredients table!")

        console.log("populating instructions")
        const instructionsPromises = instructions.map((instruction) => {
            return createInstruction(instruction)
        })
        await Promise.all(instructionsPromises)
        console.log("Populated instructions table!")

        // add one for users and for favs

    } catch (error) {
        console.error(error)
    }


}

// use map to create an array of recipe insert promises (10)
// await promise.all
// do this for each array of data (also instructions and ingredients) ((and users????))


const buildDB = () => {
    connectDB().then(() => {
        console.log("DROPPING TABLES")
        return dropTables()
    })
        .then(() => {
            console.log("finished dropping tables")
            console.log("CREATING TABLES")
            return createTables()
        })
        .then(() => {
            console.log("finished creating tables")
            return populateTables()
        })
        .then(() => {
            console.log("tables populated")
            client.end()
        })

}

buildDB()