const express = require('express')
const router = express.Router()
const {createRecipe, getRecipeByID, getAllRecipes} = 

// get all recipes route
// endpoint /recipes
// public route (you dont need to be logged in - noAuth)

router.get("/", (req, res)=>{
console.log("Get all recipes!")

})