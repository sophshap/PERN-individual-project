import React from 'react'
import { useState, useEffect } from 'react'
import { baseURL } from '../App'
import RecipeCard from '../components/RecipeCard'
import { Carousel, Col, Row } from "react-bootstrap"

function Recipes({ setShowNav }) {
    const [recipeList, setRecipeList] = useState([])
    const [search, setSearch] = useState("")

    const searchResults = recipeList.filter((recipe) => recipe.name.toLowerCase().includes(search.toLowerCase()))
    console.log(searchResults)

    useEffect(() => {
        setShowNav(true)
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


        <>



            <div className='pt-5 w-100'>

                <h1 className='text-center'>Browse Recipes</h1>
        

                <Carousel interval={null} >


                    {recipeList.map((recipe) => {
                        return (
                            <Carousel.Item key={recipe.recipe_id}>

                                <RecipeCard inCarousel={true} recipe={recipe} />

                            </Carousel.Item>
                        )
                    })}
                </Carousel>

                <h1 className='text-center'>...or Search By Drink Name</h1>

                <div id="searchbarContainer">
                    <input id="searchbar" placeholder="Search Recipes" type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
                </div>

                <Row className='searchResults'>

                    {search != "" && searchResults.map((recipe) => {
                        return (
                            <Col lg={3} md={6} sm={12} key={recipe.recipe_id}>

                                <RecipeCard inCarousel={false}
                                    recipe={recipe} />
                            </Col>
                        )

                    })}

                </Row>
            </div>
        </>
    )
}

export default Recipes

