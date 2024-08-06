import React, { useState } from 'react';
import '../Styles/RegistrationForm.css';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login Submitted:', { username, email });
    };

    return (
    <form className="form" onSubmit={handleSubmit}>
        <h2>Авторизация</h2>
        <label>
        Имя пользователя:
        <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
        />
        </label>
        <label>
        Email:
        <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
        />
        </label>
        <button type="submit">Войти</button>
    </form>
    );
};

export default LoginForm;
