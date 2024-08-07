import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { login } from '../Redux/store';
import '../Styles/RegistrationForm.css';

const LoginForm = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(login(data));
    console.log('Login Data:', data);
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
      <h2>Авторизация</h2>
      <label>
        Имя пользователя:
        <input type="text" {...register('username')} required />
      </label>
      <label>
        Email:
        <input type="email" {...register('email')} required />
      </label>
      <button type="submit">Войти</button>
    </form>
  );
};

export default LoginForm;
