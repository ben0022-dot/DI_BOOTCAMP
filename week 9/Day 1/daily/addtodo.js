import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/todoActions';

const AddTodo = ({ addTodo }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;
    
    addTodo(input);
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new todo..."
        style={{
          padding: '10px',
          width: '70%',
          marginRight: '10px',
          borderRadius: '4px',
          border: '1px solid #ddd'
        }}
      />
      <button 
        type="submit"
        style={{
          padding: '10px 20px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Add
      </button>
    </form>
  );
};

const mapDispatchToProps = {
  addTodo
};

export default connect(null, mapDispatchToProps)(AddTodo);