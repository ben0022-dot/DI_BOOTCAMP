import React from 'react'
import BookList from './components/BookList.jsx'
import GeneralFilter from './components/GeneralFilter.jsx'
import './App.css'

function App() {
  return (
     <div style={Style.app}>
     <h1 style={StyleSheet.title}> = Book Inventory</h1>
      <GeneralFilter />
      <BookList />
    </div>
  )
}

const StyleSheet = {
  app: {
    minHeight: '100vh',
    backgroundColor: '#f5f5f5',
    padding: '30px',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
  },
  title: {
    color: '#2c3e50',
    fontSize: '2.8rem',
    marginBottom: '30px',
  },
}
 

export default App
