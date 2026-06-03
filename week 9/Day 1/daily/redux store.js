import { createStore } from 'redux';
import todoReducer from '../reducers/todoReducer';

const initialState = {
  todos: []
};

const store = createStore(
  todoReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;