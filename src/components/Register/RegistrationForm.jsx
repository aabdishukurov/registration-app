import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { login } from '../Redux/store';
import '../Styles/RegistrationForm.css';

const RegistrationForm = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(login(data));
    console.log('Registration Data:', data);
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
      <h2>Регистрация</h2>
      <label>
        Имя пользователя:
        <input type="text" {...register('username')} required />
      </label>
      <label>
        Email:
        <input type="email" {...register('email')} required />
      </label>
      <label>
        Пароль:
        <input type="password" {...register('password')} required />
      </label>
      <button type="submit">Зарегистрироваться</button>
    </form>
  );
};

export default RegistrationForm;
