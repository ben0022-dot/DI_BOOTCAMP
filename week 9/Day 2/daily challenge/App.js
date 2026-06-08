import React from 'react';
import Calendar from './components/Calendar';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import './App.css';

function App() {
  return (
    <div className="app">
      <h1 className="app-title">📅 Daily Planner</h1>
      <div className="app-content">
        <Calendar />
        <div className="task-section">
          <AddTask />
          <TaskList />
        </div>
      </div>
    </div>
  );
}

export default App;