import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../Redux/store';
import '../Styles/Form.css';

const TodosLobby = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = async (data) => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      const todos = await response.json();

      const todo = todos.find(todo => todo.id.toString() === data.todoId);

      if (todo) {
        dispatch(login({ todoId: data.todoId, password: data.password }));
        window.location.href = '/usercards'; 
      } else {
        setErrorMessage('Неправильный ID задачи');
      }
    } catch (error) {
      setErrorMessage('Произошла ошибка при получении данных');
    }
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
      <h2>Аутентификация по Делам</h2>
      {isAuthenticated ? (
        <p>Вы успешно вошли в систему!</p>
      ) : (
        <>
          <label>
            Todo ID:
            <input {...register('todoId', { required: true })} />
            {errors.todoId && <span>Это поле обязательно</span>}
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

export default TodosLobby;
