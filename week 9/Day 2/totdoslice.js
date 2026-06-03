import { createSlice } from '@reduxjs/toolkit';

// Initial state with an array of todos
const initialState = {
  todos: []
};

// Create todo slice
const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    // Add a new todo
    addTodo: {
      reducer(state, action) {
        state.todos.push({
          id: Date.now(),
          text: action.payload,
          completed: false
        });
      },
      prepare(text) {
        return { payload: text };
      }
    },
    
    // Toggle todo completion status
    toggleTodo(state, action) {
      const todo = state.todos.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    
    // Remove a todo
    removeTodo(state, action) {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    }
  }
});

// Export actions
export const { addTodo, toggleTodo, removeTodo } = todoSlice.actions;

// Export reducer
export default todoSlice.reducer;