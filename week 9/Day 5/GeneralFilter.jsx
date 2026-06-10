import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedGenre } from '../store/bookStore.js'
import { selectGenreCounts } from '../store/bookSelectors.js'

function GenreFilter() {
  const dispatch = useDispatch()
  const genreCounts = useSelector(selectGenreCounts)

  const genres = ['All', 'Horror', 'Fantasy', 'Science Fiction']

  const handleGenreSelect = (genre) => {
    dispatch(setSelectedGenre(genre))
  }

  return (
    <div style={styles.filterContainer}>
      <h3 style={styles.filterTitle}>Filter by Genre:</h3>
      <div style={styles.buttonGroup}>
        {genres.map((genre) => (
          <button
            key={genre}
            onClick={() => handleGenreSelect(genre)}
            style={getButtonStyle(genre, genreCounts[genre])}
          >
            {genre}
            <span style={styles.count}>{genreCounts[genre]}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

function getButtonStyle(genre, count) {
  const isActive = genre === 'All' || count > 0
  const baseStyle = styles.genreButton
  
  return {
    ...baseStyle,
    backgroundColor: isActive ? '#4CAF50' : '#e0e0e0',
    color: isActive ? '#fff' : '#666',
    cursor: isActive ? 'pointer' : 'not-allowed',
    opacity: isActive ? 1 : 0.6
  }
}

const styles = {
  filterContainer: {
    backgroundColor: '#fff',
    padding: '25px',
    borderRadius: '10px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    marginBottom: '25px',
    textAlign: 'center'
  },
  filterTitle: {
    color: '#2c3e50',
    marginBottom: '15px',
    fontSize: '1.3rem'
  },
  buttonGroup: {
    display: 'flex',
    gap: '12px',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  genreButton: {
    padding: '12px 24px',
    fontSize: '1rem',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '8px',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  },
  count: {
    fontSize: '0.85rem',
    backgroundColor: '#fff',
    color: '#333',
    padding: '2px 6px',
    borderRadius: '4px',
    fontWeight: 'normal'
  }
}

export default GenreFilter