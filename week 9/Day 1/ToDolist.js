import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo, removeTodo } from '../redux/actions/todoActions';

function TodoList() {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  if (todos.length === 0) {
    return <p className="empty-message">No todos yet. Add one above!</p>;
  }

  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <li key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
          <input
            type="checkbox"
            className="todo-checkbox"
            checked={todo.completed}
            onChange={() => dispatch(toggleTodo(todo.id))}
          />
          <span className="todo-text">{todo.text}</span>
          <button
            className="delete-button"
            onClick={() => dispatch(removeTodo(todo.id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;