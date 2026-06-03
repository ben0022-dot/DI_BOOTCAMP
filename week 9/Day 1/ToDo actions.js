// Action Types
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const CLEAR_COMPLETED = 'CLEAR_COMPLETED';

// Action Creators
export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: {
    id: Date.now(),
    text: text,
    completed: false
  }
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: id
});

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  payload: id
});

export const clearCompleted = () => ({
  type: CLEAR_COMPLETED
});