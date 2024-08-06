import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import RegistrationForm from './components/Register/RegistrationForm';
import LoginForm from './components/Register/LoginForm';
import './components/Styles/RegistrationForm.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/register">Регистрация</Link>
            </li>
            <li>
              <Link to="/login">Авторизация</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
