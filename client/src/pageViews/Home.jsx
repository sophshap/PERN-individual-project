import React from 'react'
import Logo from "../assets/logo.png"
import { LinkContainer } from 'react-router-bootstrap'

function Home() {
    return (
        <div id="Home" className='d-flex flex-column align-items-center'>

            <img src={Logo} className="logo" alt='circular green logo' />
            <h1>Welcome</h1>
            <LinkContainer to="/recipes">
            <button>Enter</button>
            </LinkContainer>
        </div>
    )
}

export default Home