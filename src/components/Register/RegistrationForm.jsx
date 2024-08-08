import React from 'react';
import { useForm } from 'react-hook-form';
import '../Styles/Form.css';

const Register = ({ onRegister }) => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    if (data.password === data.confirmPassword) {
      onRegister(data);
    } else {
      alert("Passwords do not match");  
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <h2>Регистрация</h2>
      <label>
        Имя пользователя:
        <input {...register('username', { required: true })} />
        {errors.username && <span>Это поле обязательно</span>}
      </label>
      <label>
        Email:
        <input {...register('email', { required: true })} />
        {errors.email && <span>Это поле обязательно</span>}
      </label>
      <label>
        Пароль:
        <input type="password" {...register('password', { required: true })} />
        {errors.password && <span>Это поле обязательно</span>}
      </label>
      <label>
        Подтвердите пароль:
        <input type="password" {...register('confirmPassword', { required: true })} />
        {errors.confirmPassword && <span>Это поле обязательно</span>}
      </label>
      <button type="submit">Зарегистрироваться</button>
    </form>
  );
};

export default Register;
