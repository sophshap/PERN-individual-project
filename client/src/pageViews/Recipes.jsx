import React from 'react'
import { useState, useEffect } from 'react'
import { baseURL } from '../App'
import RecipeCard from '../components/RecipeCard'

function Recipes() {
    const [recipeList, setRecipeList] = useState([])

    useEffect(() => {
        const fetchAllRecipes = async () => {
            try {
                const response = await fetch(`${baseURL}/recipes`);
                const result = await response.json();
                console.log(result)
                setRecipeList(result);
            } catch (error) {
                console.error(error)
            }
        }
        fetchAllRecipes()
    }, [])

    return (

        //map through the recipes
        //display the name and image of each
        <div>
            {recipeList.map((recipe) => {
                return <RecipeCard recipe={recipe}/>
            })}

        </div>
    )
}

export default Recipes