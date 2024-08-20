import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../Redux/store';
import '../Styles/Form.css';

const PostsLobby = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = async (data) => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const posts = await response.json();

      const post = posts.find(post => post.id.toString() === data.postId);

      if (post) {
        dispatch(login({ postId: data.postId, password: data.password }));
        window.location.href = '/postcard'; 
      } else {
        setErrorMessage('Неправильный ID поста');
      }
    } catch (error) {
      setErrorMessage('Произошла ошибка при получении данных');
    }
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
      <h2>Аутентификация по Посту</h2>
      {isAuthenticated ? (
        <p>Вы успешно вошли в систему!</p>
      ) : (
        <>
          <label>
            Post ID:
            <input {...register('postId', { required: true })} />
            {errors.postId && <span>Это поле обязательно</span>}
          </label>
          <label>
            Password:
            <input type="password" {...register('password', { required: true })} />
            {errors.password && <span>Это поле обязательно</span>}
          </label>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <button type="submit">Войти</button>
        </>
      )}
    </form>
  );
};

export default PostsLobby;
