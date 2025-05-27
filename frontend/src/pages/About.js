import React, { useState } from 'react';
import axios from 'axios';

import AdminView from '../components/AdminView';
import AddProductPage from '../components/AddProduct';

function About() {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState('');

    const displayData = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.get('http://localhost:5000/api/users/');
            setUsers(response.data);
            setError('');
        } catch (error) {
            setUsers([]);
            setError('Error fetching users');
        }
    };

    return (
        <div>
            <button onClick={displayData}>Submit</button>
            {error && <p>{error}</p>}
            <ul style={{color: 'white'}}>
                {users.map((user) => (
                    <li key={user._id}>{user.name} ({user.email})</li>
                ))}
            </ul>

            {/* ADMINVIEEW */}
            <AdminView/>
            <AddProductPage/>
        </div>
    );
}

export default About;