import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function UserDetail() {
    const { id } = useParams()
    const [user, setUser] = useState(null)

    useEffect(() => {
        fetch('http://127.0.0.1:5000/users/${id}')
        .then(resp => resp.json())
        .then(data ]=> setUser(data))
    }, [id])

    if (!user) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <h1>{user.username}</h1>
        </div>
    )
}

export default UserDetail