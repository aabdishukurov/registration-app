import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      <h1>Добро пожаловать!</h1>
      {/* <Link to="/register">
        <button>Регистрация</button>
      </Link> */}{/* <Link to="/lobby">
        <button>Авторизации</button>
      </Link> */}
      <Link to="/UserCardsLobby">
        <button>Карты пользователей</button>
      </Link>      
      <Link to="/AlbumsLobby">
        <button>Альбом</button>
      </Link>      
      <Link to="/PhotosLobby">
        <button>Фотографии</button>
      </Link>      
      <Link to="/PostsLobby">
        <button>Посты</button>
      </Link>     
      <Link to="/TodosLobby">
        <button>Дела</button>
      </Link>      
      <Link to="/CommentsLobby">
        <button>Комменты</button>
      </Link>
    </div>
    
  );
};

export default Home;

