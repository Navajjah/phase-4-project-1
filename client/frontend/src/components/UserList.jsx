import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function UserList() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('http://127.0.0.1:5000/users')
        .then(resp => resp.json())
        .then(data => setUsers(data))
    }, [])

    return (
        <div>
            <h1>Hogwarts Students</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        <Link to={'/users/${user.id}'}>{user.username}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default UserList