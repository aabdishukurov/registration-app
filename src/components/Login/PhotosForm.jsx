import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../Redux/store';
import '../Styles/Form.css';

const PhotosLobby = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = async (data) => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/photos');
      const photos = await response.json();

      const photo = photos.find(photo => photo.id.toString() === data.photoId);

      if (photo) {
        dispatch(login({ photoId: data.photoId, password: data.password }));
        window.location.href = '/photoscard'; 
      } else {
        setErrorMessage('Неправильное ID');
      }
    } catch (error) {
      setErrorMessage('Произошла ошибка при получении данных');
    }
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
      <h2>Аутентификация по Фотографии</h2>
      {isAuthenticated ? (
        <p>Вы успешно вошли в систему!</p>
      ) : (
        <>
          <label>
            Photo ID:
            <input {...register('photoId', { required: true })} />
            {errors.photoId && <span>Это поле обязательно</span>}
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

export default PhotosLobby;
