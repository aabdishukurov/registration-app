import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { register } from '../Redux/store';
import '../Styles/Form.css';

const Registration = () => {
  const { register: formRegister, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    if (data.password === data.confirmPassword) {
      dispatch(register({ username: data.username, email: data.email, password: data.password }));
      alert('Регистрация успешна!');
    } else {
      alert('Пароли не совпадают');
    }
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
      <h2>Регистрация</h2>
      <label>
        Имя пользователя:
        <input {...formRegister('username', { required: true })} />
        {errors.username && <span>Это поле обязательно</span>}
      </label>
      <label>
        Email:
        <input type="email" {...formRegister('email', { required: true })} />
        {errors.email && <span>Это поле обязательно</span>}
      </label>
      <label>
        Пароль:
        <input type="password" {...formRegister('password', { required: true })} />
        {errors.password && <span>Это поле обязательно</span>}
      </label>
      <label>
        Подтвердите пароль:
        <input type="password" {...formRegister('confirmPassword', { required: true })} />
        {errors.confirmPassword && <span>Это поле обязательно</span>}
      </label>
      <button type="submit">Зарегистрироваться</button>
    </form>
  );
};

export default Registration;