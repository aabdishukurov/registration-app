import React, { useEffect, useState } from 'react';
import '../Styles/UserCards.css';

const UserCards = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => setUsers(data));
    }, []);

    return (
        <div className="user-cards">
            {users.map(user => (
            <div key={user.id} className="user-card">
                <h3>{user.name}</h3>
                <p>Username: {user.username}</p>
                <p>Email: {user.email}</p>
            </div>
            ))}
        </div>
    );
};

export default UserCards;
