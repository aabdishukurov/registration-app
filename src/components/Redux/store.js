import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    register(state, action) {
      state.user = action.payload;
    },
    login(state, action) {
      if (
        state.user &&
        state.user.username === action.payload.username &&
        state.user.password === action.payload.password
      ) {
        state.isAuthenticated = true;
      }
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

export const { register, login, logout } = authSlice.actions;

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});

export default store;