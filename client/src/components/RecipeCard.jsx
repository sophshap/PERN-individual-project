import React from 'react'

function RecipeCard({ recipe }) {
    return (
        <div className='recipe-card'>
            <h1>{recipe.name}</h1>
            <img className='w-100' src={recipe.image_url}/>
        </div>
    )
}

export default RecipeCard