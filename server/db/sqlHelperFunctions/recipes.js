const client = require("../client")

const createRecipe = async (recipe) => {
    const query = `
INSERT INTO recipes (name, type, recipe_yield, description, image_url) VALUES ($1, $2, $3, $4, $5)`
    const values = [recipe.name, recipe.type, recipe.recipe_yield, recipe.description, recipe.image_url]
    return client.query(query, values)
}


const getRecipeByID = async (recipeID) => {
    const query = `
    SELECT recipes.recipe_id,
    recipes.name,
    recipes.type,
    recipes.recipe_yield,
    recipes.description,
    recipes.image_url,
    ingredients.ingredient_id,
    ingredients.name,
    ingredients.amount,
    instructions.instruction_id,
    instructions.description,
    instructions.step_number
    FROM recipes
    JOIN ingredients ON recipes.recipe_id = ingredients.recipe_id
    JOIN instructions ON recipes.recipe_id = instructions.recipe_id
    WHERE recipes.recipe_id = ${recipeID};
    `
    try {
        const results = await client.query(query)
        return results
    } catch (error) {
        console.error("getRecipeByID error", error)
    }
}


const getAllRecipes = async (recipeID) => {
    const query = `
    SELECT * FROM recipes;
    `
    try {
        const results = await client.query(query)
        return results
    } catch (error) {
        console.error("getRecipeByID error", error)
    }
}






module.exports = { createRecipe, getRecipeByID, getAllRecipes }




// updating recipes and deleting