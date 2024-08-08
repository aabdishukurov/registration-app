import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Register from './components/Register/RegistrationForm';
import Login from './components/Login/LoginForm';
import { login, logout } from './components/Redux/store';

function App() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);

  const handleRegister = (data) => {
    dispatch(login(data));
  };

  const handleLogin = (data) => {
    if (user && user.username === data.username && user.password === data.password) {
      dispatch(login(user));
    } else {
      alert("Invalid credentials");
    }
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="App">
      {!isAuthenticated ? (
        <>
          <Register onRegister={handleRegister} />
          <Login onLogin={handleLogin} />
        </>
      ) : (
        <div>
          <h2>Добро пожаловать, {user.username}!</h2>
          <button class="styled-button"  onClick={handleLogout}>Выйти</button>
        </div>
      )}
    </div>
  );
}

export default App;
