import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './todo item';

const TodoList = () => {
  // Use useSelector to access todos from Redux store
  const todos = useSelector((state) => state.todos.todos);

  if (todos.length === 0) {
    return (
      <div style={{
        padding: '30px',
        textAlign: 'center',
        backgroundColor: '#fff',
        borderRadius: '6px',
        border: '1px solid #e0e0e0'
      }}>
        <p style={{ 
          color: '#999', 
          fontSize: '16px',
          margin: 0 
        }}>
          📭 No todos yet. Add one below!
        </p>
      </div>
    );
  }

  return (
    <div style={{
      padding: '20px',
      backgroundColor: '#fff',
      borderRadius: '6px',
      border: '1px solid #e0e0e0'
    }}>
      <h3 style={{ 
        marginBottom: '15px', 
        color: '#333',
        fontSize: '18px'
      }}>
        📋 Your Todos ({todos.length})
      </h3>
      
      <ul style={{ 
        listStyle: 'none', 
        padding: 0, 
        margin: 0 
      }}>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
      
      {/* Summary */}
      <div style={{
        marginTop: '15px',
        padding: '10px',
        backgroundColor: '#f5f5f5',
        borderRadius: '4px',
        fontSize: '14px',
        color: '#666'
      }}>
        <strong>Completed:</strong> {todos.filter(t => t.completed).length} / {todos.length}
      </div>
    </div>
  );
};

export default TodoList;