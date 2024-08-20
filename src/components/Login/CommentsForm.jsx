import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../Redux/store';
import '../Styles/Form.css';

const CommentsLobby = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = async (data) => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/comments');
      const comments = await response.json();

      const comment = comments.find(comment => comment.id.toString() === data.commentId);

      if (comment) {
        dispatch(login({ commentId: data.commentId, password: data.password }));
        window.location.href = '/CommentCards'; 
      } else {
        setErrorMessage('Неправильный ID комментария');
      }
    } catch (error) {
      setErrorMessage('Произошла ошибка при получении данных');
    }
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
      <h2>Аутентификация по Комментариям</h2>
      {isAuthenticated ? (
        <p>Вы успешно вошли в систему!</p>
      ) : (
        <>
          <label>
            Comment ID:
            <input {...register('commentId', { required: true })} />
            {errors.commentId && <span>Это поле обязательно</span>}
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

export default CommentsLobby;
