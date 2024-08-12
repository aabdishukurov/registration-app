import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      <h1>Добро пожаловать!</h1>
      <Link to="/register">
        <button>Регистрация</button>
      </Link>
      <Link to="/login">
        <button>Авторизация</button>
      </Link>
    </div>
    
  );
};

export default Home;