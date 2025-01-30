import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <nav className='nav-bar'>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/new-book">Home</Link></li>
                <li><Link to="/users">Home</Link></li>
                <li><Link to="/reviews">Home</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar