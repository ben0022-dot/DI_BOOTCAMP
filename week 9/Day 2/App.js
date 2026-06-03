import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import AddTodo from './add todo';
import TodoList from './todo list';

const App = () => {
  return (
    <Provider store={store}>
      <div style={{
        maxWidth: '700px',
        margin: '0 auto',
        padding: '20px',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        backgroundColor: '#f0f2f5',
        minHeight: '100vh'
      }}>
        {/* Header */}
        <header style={{
          textAlign: 'center',
          marginBottom: '30px',
          padding: '25px',
          backgroundColor: '#fff',
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}>
          <h1 style={{ 
            margin: 0, 
            color: '#333', 
            fontSize: '32px'
          }}>
            🌟 Todo List
          </h1>
          <p style={{ 
            margin: '10px 0 0 0', 
            color: '#666', 
            fontSize: '16px'
          }}>
            Built with React-Redux & Redux Toolkit
          </p>
        </header>

        {/* Main Content */}
        <main>
          <AddTodo />
          <TodoList />
        </main>

        {/* Footer */}
        <footer style={{
          textAlign: 'center',
          marginTop: '30px',
          padding: '20px',
          color: '#999',
          fontSize: '13px'
        }}>
          <p>Using Redux Toolkit with configureStore and createSlice</p>
        </footer>
      </div>
    </Provider>
  );
};

export default App;
};

export default App;