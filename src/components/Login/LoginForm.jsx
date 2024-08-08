import React from 'react';
import { useForm } from 'react-hook-form';
import '../Styles/Form.css';

const Login = ({ onLogin }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    onLogin(data);
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <h2>Авторизация</h2>
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
    </form>
  );
};

export default Login;
