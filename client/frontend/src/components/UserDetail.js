// src/components/UserDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function UserDetail() {
  const { id } = useParams(); // Extract the id parameter from the URL
  const [user, setUser] = useState(null); // State to hold user data
  const [loading, setLoading] = useState(true); // State to track loading status
  const [error, setError] = useState(null); // State to track any errors

  useEffect(() => {
    // Fetch user data from the API
    fetch(`http://127.0.0.1:5000/users/${id}`)
      .then(resp => {
        if (!resp.ok) {
          throw new Error('Network response was not ok');
        }
        return resp.json();
      })
      .then(data => {
        setUser(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>; // Show loading message while fetching data
  }

  if (error) {
    return <div>Error: {error}</div>; // Show error message if any
  }

  if (!user) {
    return <div>User not found</div>; // Show message if user data is not found
  }

  return (
    <div className='user-display'>
      <h1>{user.username}</h1>
    </div>
  );
}

export default UserDetail;
