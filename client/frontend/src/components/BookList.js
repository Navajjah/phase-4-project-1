import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './BookList.css';
import NewBookForm from './NewBookForm';

function BookList() {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        fetch('http://127.0.0.1:5000/books')
            .then(resp => {
                if (!resp.ok) {
                    throw new Error('Network response was not ok');
                }
                return resp.json();
            })
            .then(data => {
                setBooks(data);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    return (
        <div className='book-list-container'>
            <h1>Books</h1>
            {loading && <p>Loading books...</p>}
            {error && <p>Error: {error}</p>}
            <ul className='book-list'>
                {books.map(book => (
                    <li key={book.id}>
                        <Link to={`/books/${book.id}`}>{book.title}</Link>
                    </li>
                ))}
            </ul>
            <NewBookForm />
        </div>
    );
}

export default BookList;
