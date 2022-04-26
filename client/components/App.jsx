import React from 'react'
import { useSelector } from 'react-redux'
import Header from './Header'
import Nav from './Nav'
import PlantList from './PlantList'
// import { Routes, Route } from 'react-router-dom'
import Cart from './Cart'
// import { Route, Routes } from 'react-router-dom'
// import Admin from './Admin'


function App() {
  const page = useSelector(global => global.activePage)
  const onPage = page === 'home'
  return (
    <div className="app">
      <Nav/>
      <Header />
      {onPage ? <PlantList /> : <Cart />}
      
      {/* <Routes>
      <Route path='*' element={<App />} />
      <Route path='/admin' element={<Admin />} />



      </Routes> */}
      
  
    </div>
  )
}

export default App



