import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo, removeTodo } from '../actions/todoActions';

const TodoList = ({ todos, toggleTodo, removeTodo }) => {
  if (todos.length === 0) {
    return <p>No todos yet. Add one above!</p>;
  }

  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {todos.map(todo => (
        <li key={todo.id} style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          padding: '10px',
          margin: '5px 0',
          backgroundColor: '#f5f5f5',
          borderRadius: '4px',
          textDecoration: todo.completed ? 'line-through' : 'none',
          opacity: todo.completed ? 0.6 : 1
        }}>
          <span 
            onClick={() => toggleTodo(todo.id)}
            style={{ cursor: 'pointer', flex: 1 }}
          >
            {todo.text}
          </span>
          <button 
            onClick={() => removeTodo(todo.id)}
            style={{
              backgroundColor: '#ff4444',
              color: 'white',
              border: 'none',
              padding: '5px 10px',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos
});

const mapDispatchToProps = {
  toggleTodo,
  removeTodo
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);