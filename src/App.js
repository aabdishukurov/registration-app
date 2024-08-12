import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Provider, useDispatch } from 'react-redux';
import store, { logout } from './components/Redux/store';
import Home from './components/Home/Home';
import Registration from './components/Register/RegistrationForm';
import Login from './components/Login/LoginForm';
import "./components/Styles/Form.css"

function App() {
  const dispatch = useDispatch();

  return (
    <Provider store={store}>
      <Router>
        <nav>
          <Link class="distance" to="/">Главная</Link>
          <Link class="distance_2" to="/register">Регистрация</Link> 
          <Link class="distance" to="/login">Авторизация</Link> 
          <button class="distance" onClick={() => dispatch(logout())}>Выйти</button>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
