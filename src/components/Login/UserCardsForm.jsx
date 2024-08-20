import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../Redux/store';
import '../Styles/Form.css';

const UserCardsLobby = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = async (data) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();

    const user = users.find(user => user.username === data.username);

    if (user) {
      dispatch(login({ username: data.username, password: data.password }));
      window.location.href = '/usercards'; 
    } else {
      setErrorMessage('Неправильный Username');
    }
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
      <h2>Аутентификация по Картам Пользователей</h2>
      {isAuthenticated ? (
        <p>Вы успешно вошли в систему!</p>
      ) : (
        <>
          <label>
            Username:
            <input {...register('username', { required: true })} />
            {errors.username && <span>Это поле обязательно</span>}
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

export default UserCardsLobby;