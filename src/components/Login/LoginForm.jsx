import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../Redux/store';
import '../Styles/Form.css';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  const onSubmit = (data) => {
    dispatch(login({ username: data.username, password: data.password }));
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
      <h2>Авторизация</h2>
      {isAuthenticated ? (
        <p>Вы успешно вошли в систему!</p>
      ) : (
        <>
          <label>
            Имя пользователя:
            <input {...register('username', { required: true })} />
            {errors.username && <span>Это поле обязательно</span>}
          </label>
          <label>
            Пароль:
            <input type="password" {...register('password', { required: true })} />
            {errors.password && <span>Это поле обязательно</span>}
          </label>
          <button type="submit">Войти</button>
        </>
      )}
    </form>
  );
};

export default Login;