import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { baseURL } from '../App'

function SingleRecipe({ setShowNav }) {
    const [recipe, setRecipe] = useState(null)
    const { id } = useParams()


    useEffect(() => {
        setShowNav(true)
        const fetchSingleRecipe = async () => {
            try {
                const response = await fetch(`${baseURL}/recipes/${id}`);
                const result = await response.json();
                console.log(result)
                setRecipe(result);
            } catch (error) {
                console.error(error)
            }
        }
        fetchSingleRecipe()
    }, [id])


    return (
        <div id='singleRecipeView' className='pt-5 d-flex justify-content-center' >
            <div className='d-flex justify-content-start w-100'>
                <Link to="/recipes">
                    <button className='backButton'>Back</button>
                </Link>

            </div>

            <div className='singleViewContent'>
                {recipe && (
                    <>
                        <div id='imageBadge' className='position-relative'>
                            {recipe.type == "mocktail" && <p className='position-absolute'>Mocktail</p>}
                            <img src={recipe.image_url} />
                        </div>

                        <div className='px-3'>
                            <h1 className='text-center'>{recipe.name}</h1>
                            <p>{recipe.description}</p>
                            <p>Serving size: {recipe.recipe_yield}</p>

                            <ul>
                                {recipe.ingredients.map((ingredient) => {
                                    return <li key={ingredient.ingredient_id}>{ingredient.name} ({ingredient.amount})</li>
                                })}
                            </ul>

                            <ol>
                                {recipe.instructions.map((instruction) => {
                                    return <li key={instruction.instruction_id}>{instruction.description}</li>
                                })}
                            </ol>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default SingleRecipe