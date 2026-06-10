import React from 'react'
import { useSelector } from 'react-redux'
import { selectFilteredBooks, selectTotalBooks } from '../store/bookSelectors.js'

function BookList() {
  const filteredBooks = useSelector(selectFilteredBooks)
  const totalBooks = useSelector(selectTotalBooks)

  return (
    <div style={styles.listContainer}>
      <div style={styles.header}>
        <h2 style={styles.title}>Books</h2>
        <p style={styles.count}>
          Showing {filteredBooks.length} of {totalBooks} books
        </p>
      </div>

      {filteredBooks.length === 0 ? (
        <div style={styles.emptyMessage}>
          No books found for this genre.
        </div>
      ) : (
        <div style={styles.booksGrid}>
          {filteredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      )}
    </div>
  )
}

function BookCard({ book }) {
  const genreColors = {
    'Horror': '#f44336',
    'Fantasy': '#9c27b0',
    'Science Fiction': '#2196f3'
  }

  return (
    <div style={styles.bookCard}>
      <div style={styles.bookHeader}>
        <span style={styles.bookId}>#{book.id}</span>
        <span style={{ ...styles.genreTag, backgroundColor: genreColors[book.genre] }}>
          {book.genre}
        </span>
      </div>
      <h3 style={styles.bookTitle}>{book.title}</h3>
      <p style={styles.bookAuthor}>by {book.author}</p>
    </div>
  )
}

const styles = {
  listContainer: {
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
  },
  header: {
    marginBottom: '25px',
    textAlign: 'center'
  },
  title: {
    color: '#2c3e50',
    fontSize: '2rem',
    marginBottom: '8px'
  },
  count: {
    color: '#666',
    fontSize: '1rem'
  },
  emptyMessage: {
    textAlign: 'center',
    color: '#999',
    fontSize: '1.2rem',
    padding: '40px'
  },
  booksGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '20px'
  },
  bookCard: {
    backgroundColor: '#f8f9fa',
    padding: '20px',
    borderRadius: '8px',
    border: '1px solid #e0e0e0',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease'
  },
  bookHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '12px'
  },
  bookId: {
    color: '#999',
    fontSize: '0.9rem',
    fontWeight: 'bold'
  },
  genreTag: {
    padding: '4px 10px',
    borderRadius: '4px',
    fontSize: '0.8rem',
    fontWeight: 'bold',
    color: '#fff'
  },
  bookTitle: {
    color: '#2c3e50',
    fontSize: '1.2rem',
    marginBottom: '8px',
    lineHeight: '1.3'
  },
  bookAuthor: {
    color: '#666',
    fontSize: '0.95rem'
  }
}

export default BookList