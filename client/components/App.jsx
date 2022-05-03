import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Header from './Header'
// import Nav from './Nav'
import PlantList from './PlantList'
// import { Routes, Route } from 'react-router-dom'
import Cart from './Cart'
import { Route, Routes } from 'react-router-dom'
import Admin from './Admin'
import { getPlantsThunk } from '../actions'
import Product from './Product'
import PlantCare from './PlantCare'


function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPlantsThunk())
  })

  
  const page = useSelector(global => global.activePage)
  const onPage = page === 'home'
  return (
    <div className="app">
      <Header />
      {/* {onPage ? <PlantList /> : <Cart />} */}

      {/* <button className='get-fact' onClick={findPlantFact}>Get A Plant Fact</button>
      <div className='fact'>
      <p>{fact.fact}</p>
      </div> */}

      <Routes>
      <Route path='/' element={<PlantList/>}/>
      <Route path='/admin' element={<Admin />} />
      <Route path='/cart' element={<Cart />}/>
      <Route path='/plantcare' element={<PlantCare/>}/>
     </Routes>
      
  
    </div>
  )
}

export default App



