import { useEffect, useState } from 'react'
import './App.css'
import NavBar from './components/navbar'

function App() {
  const [books, setbooks] = useState([])
  
  useEffect (() =>{fetchAllBooks()}, [])

  const fetchAllBooks = async () => {
    const response = await fetch("http://127.0.0.1:5000/books/wheeloftime")
    const data = await response.json()
    setbooks(data.books)
  }

  return (
    <>
      <NavBar/>

      
    </>
  )
}

export default App
