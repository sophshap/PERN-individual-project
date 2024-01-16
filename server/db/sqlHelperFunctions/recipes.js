const client = require("../client")

const createRecipe = async (recipe) => {
    const query = `
INSERT INTO recipes (name, type, recipe_yield, description, image_URL) VALUES ($1, $2, $3, $4, $5)`
    const values = [recipe.name, recipe.type, recipe.recipe_yield, recipe.description, recipe.image_URL]
    return client.query(query, values)
}


module.exports = {createRecipe}




// updating recipes and deleting