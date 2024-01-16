const client = require("../client")

const createIngredient = async (ingredient) => {
    const query = `
INSERT INTO ingredients (recipe_id, name, amount) VALUES ($1, $2, $3)`
    const values = [ingredient.recipe_id, ingredient.name, ingredient.amount]
    return client.query(query, values)
}

module.exports = {createIngredient}

