import React from 'react'
import { Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function RecipeCard({ recipe, inCarousel }) {

    return (
        <div className={`recipe-card ${inCarousel ? "w-100" : "m-4"}`}>
            <div className={inCarousel ? "recipe-card-inner-carousel" : "recipe-card-inner-search"} >

                <img className={inCarousel ? "carouselImage" : "searchResultsImage"} src={recipe.image_url} />
                {inCarousel ? (
                    <Carousel.Caption>
                        <h2>{recipe.name}</h2>
                        <Link to={`/recipes/${recipe.recipe_id}`}>
                            <button className='name-hover'>
                                See Drink Details
                            </button>
                        </Link>
                    </Carousel.Caption>
                ) : (
                    <Link to={`/recipes/${recipe.recipe_id}`}>
                        <h2>{recipe.name}</h2>
                    </Link>
                )}
            </div>
        </div>
    )
}

export default RecipeCard