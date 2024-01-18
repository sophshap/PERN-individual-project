const express = require('express')
const router = express.Router()
const { createRecipe, getRecipeByID, getAllRecipes } = require("../db/sqlHelperFunctions/recipes")
const { formatData } = require('../db/helperFunctions')

// get all recipes route
// endpoint /recipes
// public route (you dont need to be logged in - noAuth)

router.get("/", async (req, res) => {
    console.log("Get all recipes!")
    try {
        const data = await getAllRecipes()
        console.log("all recipes", data.rows)
        res.status(200).json(data.rows)
    } catch (error) {
        console.error("get all recipes error", error)
        res.status(500).send("Something went wrong.")
    }
})

// get single recipe route
// endpoint /recipes/:id
// public route (you dont need to be logged in - noAuth)

router.get("/:id", async (req, res) => {
    console.log("Get a recipe!")
    try {
        const data = await getRecipeByID(req.params.id)
        const formattedData = formatData(data.rows)
        console.log("a recipe", formattedData)
        res.status(200).json(formattedData)
    } catch (error) {
        console.error("get a recipe error", error)
        res.status(500).send("Something went wrong.")
    }
})

module.exports = router