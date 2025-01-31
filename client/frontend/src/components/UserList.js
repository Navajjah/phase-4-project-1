import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './UserList.css'
function UserList() {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading(true);
        fetch('http://127.0.0.1:5000/users')
            .then(resp => {
                if (!resp.ok) {
                    throw new Error('Network response was not ok');
                }
                return resp.json();
            })
            .then(data => {
                console.log('Fetched users:', data)
                setUsers(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching users:', error)
                setError(error.message);
                setLoading(false);
            });
    }, []);

    return (
        <div>
            <h1>Hogwarts Students</h1>
            {loading && <p>Loading users...</p>}
            {error && <p>Error loading users: {error}</p>}
            <ul className="user-list">
                {users.map(user => (
                    <li key={user.id}>
                        <Link to={`/users/${user.id}`}>{user.username}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default UserList