import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './src/totdoslice';

// Initialize store with todo slice
const store = configureStore({
  reducer: {
    todos: todoReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }),
  devTools: process.env.NODE_ENV !== 'production'
});

export default store;