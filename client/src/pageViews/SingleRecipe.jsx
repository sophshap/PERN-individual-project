import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { baseURL } from '../App'

function SingleRecipe({ setShowNav }) {
    const [recipe, setRecipe] = useState(null)
    const { id } = useParams()
    setShowNav(true)

    useEffect(() => {
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



    // display (description, type, yield)
    //map through ingredients (ul), return li's (name, amount)
    //map through steps (ol), return li's (description)


    return (
        <div>
            {recipe && (
                <>
                    <h1>{recipe.name}</h1>




                </>
            )}


        </div>
    )
}

export default SingleRecipe