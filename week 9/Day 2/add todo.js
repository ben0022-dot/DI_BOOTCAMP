import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './totdoslice';

const AddTodo = () => {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation
    if (!input.trim()) {
      setError('Todo text cannot be empty');
      return;
    }
    
    if (input.trim().length > 100) {
      setError('Todo text must be less than 100 characters');
      return;
    }
    
    // Dispatch addTodo action
    dispatch(addTodo(input.trim()));
    
    // Reset form
    setInput('');
    setError('');
  };

  return (
    <form 
      onSubmit={handleSubmit}
      style={{
        marginBottom: '20px',
        padding: '20px',
        backgroundColor: '#fff',
        borderRadius: '6px',
        border: '1px solid #e0e0e0'
      }}
    >
      <h3 style={{ 
        marginBottom: '15px', 
        color: '#333',
        fontSize: '18px',
        margin: '0 0 15px 0'
      }}>
        ➕ Add New Todo
      </h3>
      
      <div style={{ 
        display: 'flex', 
        gap: '10px',
        flexDirection: 'row'
      }}>
        <input
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            setError('');
          }}
          placeholder="Enter your todo..."
          style={{
            flex: 1,
            padding: '12px',
            border: error ? '1px solid #ff4444' : '1px solid #ddd',
            borderRadius: '4px',
            fontSize: '14px',
            outline: 'none',
            transition: 'border-color 0.2s ease'
          }}
        />
        
        <button
          type="submit"
          style={{
            padding: '12px 24px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: 'bold',
            transition: 'background-color 0.2s ease'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#45a049'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#4CAF50'}
        >
          Add Todo
        </button>
      </div>
      
      {error && (
        <p style={{ 
          color: '#ff4444', 
          marginTop: '10px', 
          margin: '10px 0 0 0',
          fontSize: '14px'
        }}>
          {error}
        </p>
      )}
    </form>
  );
};

export default AddTodo;