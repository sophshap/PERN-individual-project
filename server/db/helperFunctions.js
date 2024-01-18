const { Description } = require("@mui/icons-material")
const { ingredients } = require("./seedData")

const formatData = (data) => {
    const result = {
        recipe_id: data[0].recipe_id,
        name: data[0].name,
        type: data[0].type,
        recipe_yield: data[0].recipe_yield,
        description: data[0].description,
        image_url: data[0].image_url,
        ingredients: [],
        instructions: []
    }
    let ingredient_ids = []
    let instruction_ids = []

    data.forEach((drink) => {
        const ingredient = {
            ingredient_id: drink.ingredient_id,
            name: drink.ingredient_name,
            amount: drink.amount
        }
        const instruction = {
            instruction_id: drink.instruction_id,
            description: drink.instruction_description,
            step_number: drink.step_number

        }
        if (!ingredient_ids.includes(drink.ingredient_id)) {
            result.ingredients.push(ingredient)
            ingredient_ids.push(drink.ingredient_id)
        }
        if (!instruction_ids.includes(drink.instruction_id)) {
            result.instructions.push(instruction)
            instruction_ids.push(drink.instruction_id)
        }
    })
    return result
}

module.exports = { formatData }