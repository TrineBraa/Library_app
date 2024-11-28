import './App.css'

import SearchPage from './pages/searchPage'
import LibraryPage from './pages/libraryPage'
import LoginPage from './pages/loginPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'



function App() {

  


  return (
    <div>
        <BrowserRouter>
          <Routes>
              <Route path ="/" element={<LoginPage/>}/>
              <Route path ="/Books" element={<SearchPage/>}/>
              <Route path ="/Library" element={<LibraryPage/>}/>
          </Routes>
        </BrowserRouter>    
      
      
    </div>
  )
}

export default App
