import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function BookList() {
    const [books, setBooks] = useState([])

    useEffect(() => {
        fetch('http://127.0.0.1:5000/books')
        .then(resp => resp.json())
        .then(data => setBooks(data))
    }, [])

    return (
        <div>
            <h1>Books</h1>
            <ul>
                {books.map(book => (
                   <li>
                    <Link to={'/books/${book.id}'}></Link>
                   </li> 
                ))}
            </ul>
        </div>
    )
}

export default BookList