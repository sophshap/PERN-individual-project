import React from 'react'
import { useState, useEffect } from 'react'
import { baseURL } from '../App'
import RecipeCard from '../components/RecipeCard'
import { Carousel } from "react-bootstrap"

function Recipes({ setShowNav }) {
    const [recipeList, setRecipeList] = useState([])
    setShowNav(true)

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
        <div className='pt-5'>
            <Carousel interval={null} >


                {recipeList.map((recipe) => {
                    return (
                        <Carousel.Item key={recipe.recipe_id}>

                            <RecipeCard recipe={recipe} />

                        </Carousel.Item>
                    )
                })}
            </Carousel>

        </div>
    )
}

export default Recipes

