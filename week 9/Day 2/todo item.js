import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, removeTodo } from './totdoslice';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTodo(todo.id));
  };

  const handleRemove = () => {
    dispatch(removeTodo(todo.id));
  };

  return (
    <li 
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '12px 15px',
        margin: '8px 0',
        backgroundColor: todo.completed ? '#f0f9f0' : '#fff',
        border: '1px solid #e0e0e0',
        borderRadius: '6px',
        textDecoration: todo.completed ? 'line-through' : 'none',
        opacity: todo.completed ? 0.7 : 1,
        transition: 'all 0.3s ease'
      }}
    >
      <div 
        style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '12px',
          flex: 1,
          cursor: 'pointer'
        }}
        onClick={handleToggle}
      >
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleToggle}
          style={{
            width: '20px',
            height: '20px',
            cursor: 'pointer',
            accentColor: '#4CAF50'
          }}
        />
        <span style={{ 
          fontSize: '16px',
          color: todo.completed ? '#4CAF50' : '#333'
        }}>
          {todo.text}
        </span>
      </div>
      
      <button
        onClick={handleRemove}
        style={{
          padding: '8px 16px',
          backgroundColor: '#ff4444',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '14px',
          fontWeight: 'bold',
          transition: 'background-color 0.2s ease'
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = '#ff0000'}
        onMouseOut={(e) => e.target.style.backgroundColor = '#ff4444'}
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;