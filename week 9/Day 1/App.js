import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoStats from './components/TodoStats';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1> Todo List</h1>
        <p>Manage your tasks with React & Redux</p>
      </header>
      <TodoForm />
      <TodoList />
      <TodoStats />
    </div>
  );
}

export default App;