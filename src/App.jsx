import React from 'react'
import HomePage from './home_page/HomePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CategoryListPage from './home_page/CategoryListPage'
const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='products' element={<CategoryListPage/>}/>
        
    </Routes>
    </BrowserRouter>
  )
}

export default App