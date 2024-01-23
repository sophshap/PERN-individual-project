import React from 'react'
import { Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function RecipeCard({ recipe }) {
    return (
        <div className='recipe-card'>
            <div className='recipe-card-inner'>

                <img className='h-75' src={recipe.image_url} />
                <Carousel.Caption>
                    <Link to={`/recipes/${recipe.recipe_id}`}>
                        <h2>{recipe.name}</h2>
                    </Link>
                </Carousel.Caption>


            </div>
        </div>
    )
}

export default RecipeCard