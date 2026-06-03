import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearCompleted } from '../redux/actions/todoActions';

function TodoStats() {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const activeTodos = todos.filter(todo => !todo.completed).length;
  const completedTodos = todos.filter(todo => todo.completed).length;

  return (
    <div className="todo-stats">
      <span>{activeTodos} item{activeTodos !== 1 ? 's' : ''} left</span>
      {completedTodos > 0 && (
        <button
          className="clear-completed"
          onClick={() => dispatch(clearCompleted())}
        >
          Clear Completed ({completedTodos})
        </button>
      )}
    </div>
  );
}

export default TodoStats;