import { configureStore, createSlice } from '@reduxjs/toolkit'

// ============================================
// Mock Data - Book Inventory
// ============================================
const initialBooks = [
  { id: 1, title: "The Night Watch", author: "James Patterson", genre: "Horror" },
  { id: 2, title: "Dracula", author: "Bram Stoker", genre: "Horror" },
  { id: 3, title: "The Exorcist", author: "William Peter Blatty", genre: "Horror" },
  { id: 4, title: "Harry Potter", author: "J.K. Rowling", genre: "Fantasy" },
  { id: 5, title: "The Lord of the Rings", author: "J.R.R. Tolkien", genre: "Fantasy" },
  { id: 6, title: "Game of Thrones", author: "George R.R. Martin", genre: "Fantasy" },
  { id: 7, title: "1984", author: "George Orwell", genre: "Science Fiction" },
  { id: 8, title: "Brave New World", author: "Aldous Huxley", genre: "Science Fiction" },
  { id: 9, title: "The Martian", author: "Andy Weir", genre: "Science Fiction" },
  { id: 10, title: "Dune", author: "Frank Herbert", genre: "Science Fiction" },
  { id: 11, title: "It", author: "Stephen King", genre: "Horror" },
  { id: 12, title: "The Hobbit", author: "J.R.R. Tolkien", genre: "Fantasy" },
  { id: 13, title: "Foundation", author: "Isaac Asimov", genre: "Science Fiction" },
  { id: 14, title: "The Shining", author: "Stephen King", genre: "Horror" },
  { id: 15, title: "A Wizard of Earthsea", author: "Ursula K. Le Guin", genre: "Fantasy" }
]

// ============================================
// Create the Book Slice
// ============================================

const bookSlice = createSlice({
  name: 'books',
  
  // Initial state
  initialState: {
    books: initialBooks,
    selectedGenre: 'All' // Default genre selection
  },
  
  // Reducers for synchronous actions
  reducers: {
    setSelectedGenre: (state, action) => {
      state.selectedGenre = action.payload
    },
    addBook: (state, action) => {
      state.books.push(action.payload)
    },
    removeBook: (state, action) => {
      state.books = state.books.filter(book => book.id !== action.payload)
    }
  }
})

// Export actions
export const { setSelectedGenre, addBook, removeBook } = bookSlice.actions

// Export reducer
export const booksReducer = bookSlice.reducer

// ============================================
// Create the Redux Store
// ============================================

export const store = configureStore({
  reducer: {
    books: booksReducer
  }
})