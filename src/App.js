import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Provider, useDispatch } from 'react-redux';
import store, { logout } from './components/Redux/store';
import Home from './components/Home/Home';
// import Registration from './components/Register/RegistrationForm';
import Login from './components/Login/LoginForm';
import UserCards from './components/element/Users/UserCards'
import UserCardsLobby from "./components/Login/UserCardsForm"
import AlbumCards from './components/element/Albums/Albums';
import AlbumsLobby from "./components/Login/AlbumsForm"
import PhotoCards from './components/element/Photos/Photos';
import PhotosLobby from './components/Login/PhotosForm';
import PostCards from './components/element/Posts/Posts';
import PostsLobby from './components/Login/PostsForm';
import TodoCards from './components/element/Todos/Todos';
import TodosLobby from './components/Login/TodosForm';
import CommentCards from './components/element/Comments/Comments';
import CommentsLobby from './components/Login/CommentsForm';
import "./components/Styles/Form.css"

function App() {
  // const dispatch = useDispatch();

  return (
    <Provider store={store}>
      <Router>
        <nav>
          <Link class="distance" to="/">Главная</Link>
          {/* <Link class="distance" to="/register">Регистрация</Link>  */}
          {/* <Link class="distance" to="/login">Авторизация</Link>  */}
          <Link class="distance" to="/UserCardsLobby">Карты пользователей</Link>
          <Link class="distance" to="/PhotosLobby">Фотографии</Link>
          <Link class="distance" to="/AlbumsLobby">Альбомы</Link>
          <Link class="distance" to="/PostsLobby">Посты</Link>
          <Link class="distance" to="/TodosLobby">Дела</Link>
          <Link class="distance" to="/CommentsLobby">Комменты</Link> 
          {/* <button class="distance" onClick={() => dispatch(logout())}>Выйти</button> */}
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/register" element={<Registration />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/usercards" element={<UserCards />} />
          <Route path="/UserCardsLobby" element={<UserCardsLobby />} />          
          <Route path="/albumcards" element={<AlbumCards />} />
          <Route path="/AlbumsLobby" element={<AlbumsLobby />} />         
          <Route path="/photoscard" element={<PhotoCards />} />
          <Route path="/PhotosLobby" element={<PhotosLobby />} />          
          <Route path="/postcard" element={<PostCards />} />
          <Route path="/PostsLobby" element={<PostsLobby />} />         
          <Route path="/todocards" element={<TodoCards />} />
          <Route path="/TodosLobby" element={<TodosLobby />} />        
          <Route path="/commentcards" element={<CommentCards />} />
          <Route path="/CommentsLobby" element={<CommentsLobby />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
