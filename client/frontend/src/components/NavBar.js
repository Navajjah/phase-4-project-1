import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <nav className='nav-bar'>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/new-book">Books</Link></li>
                <li><Link to="/users">Users</Link></li>
                <li><Link to="/reviews">Reviews</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar