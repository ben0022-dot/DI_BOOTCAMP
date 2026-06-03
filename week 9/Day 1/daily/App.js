import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

const App = () => {
  return (
    <Provider store={store}>
      <div style={{ 
        maxWidth: '600px', 
        margin: '0 auto', 
        padding: '20px',
        fontFamily: 'Arial, sans-serif'
      }}>
        <h1 style={{ textAlign: 'center', color: '#333' }}>
          📝 Todo List with React-Redux
        </h1>
        <AddTodo />
        <TodoList />
      </div>
    </Provider>
  );
};

export default App;