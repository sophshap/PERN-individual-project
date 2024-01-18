const client = require("../client")

const createInstruction = async (instruction) => {
    const query = `
INSERT INTO instructions (recipe_id, description, step_number) VALUES ($1, $2, $3)`
    const values = [instruction.recipe_id, instruction.description, instruction.step_number]
    return client.query(query, values)
}

module.exports = { createInstruction }