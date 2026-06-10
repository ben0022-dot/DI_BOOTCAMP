import { createSelector } from '@reduxjs/toolkit'

// ============================================
// Input Selectors (Basic Selectors)
// ============================================

// Select all books from the state
const selectBooks = (state) => state.books.books

// Select the currently selected genre
const selectSelectedGenre = (state) => state.books.selectedGenre

// ============================================
// Memoized Selectors using createSelector
// ============================================

// selectAllBooks: Returns all books (no filtering)
export const selectAllBooks = createSelector(
  [selectBooks],
  (books) => books
)

// selectHorrorBooks: Returns only Horror genre books
export const selectHorrorBooks = createSelector(
  [selectBooks],
  (books) => books.filter(book => book.genre === 'Horror')
)

// selectFantasyBooks: Returns only Fantasy genre books
export const selectFantasyBooks = createSelector(
  [selectBooks],
  (books) => books.filter(book => book.genre === 'Fantasy')
)

// selectScienceFictionBooks: Returns only Science Fiction genre books
export const selectScienceFictionBooks = createSelector(
  [selectBooks],
  (books) => books.filter(book => book.genre === 'Science Fiction')
)

// selectFilteredBooks: Returns books based on selected genre (combines books + genre)
export const selectFilteredBooks = createSelector(
  [selectBooks, selectSelectedGenre],
  (books, selectedGenre) => {
    if (selectedGenre === 'All') {
      return books
    }
    return books.filter(book => book.genre === selectedGenre)
  }
)

// selectGenreCounts: Returns count of books per genre (performance optimization)
export const selectGenreCounts = createSelector(
  [selectBooks],
  (books) => {
    const counts = {
      'Horror': 0,
      'Fantasy': 0,
      'Science Fiction': 0
    }
    books.forEach(book => {
      if (counts[book.genre]) {
        counts[book.genre]++
      }
    })
    return counts
  }
)

// selectTotalBooks: Returns total number of books
export const selectTotalBooks = createSelector(
  [selectBooks],
  (books) => books.length
)