import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './components/Redux/store';
import RegistrationForm from './components/Register/RegistrationForm';
import LoginForm from './components/Login/LoginForm';
import "../src/components/Styles/RegistrationForm.css"

function App() {
  const [isRegistering, setIsRegistering] = useState(true);

  return (
    <Provider store={store}>
      <div className="App">
        <button onClick={() => setIsRegistering(!isRegistering)}>
          {isRegistering ? 'Перейти к авторизации' : 'Перейти к регистрации'}
        </button>
        {isRegistering ? <RegistrationForm /> : <LoginForm />}
      </div>
    </Provider>
  );
}

export default App;
