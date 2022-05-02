import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Header from './Header'
import Nav from './Nav'
import PlantList from './PlantList'
// import { Routes, Route } from 'react-router-dom'
import Cart from './Cart'
import { Route, Routes } from 'react-router-dom'
import Admin from './Admin'
import { getPlantsThunk } from '../actions'
// import { getAllFacts } from '../apiClient'




function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPlantsThunk())
  })

  // const [fact, setFact] = useState([])

  // const findPlantFact = () => {
  //   console.log(getAllFacts)
  //   getAllFacts()
  //   .then(factArr => {
  //     const factObj = factArr[Math.floor(Math.random() *factArr.length)]
  //     setFact(factObj)
  //   })
  //   .catch((err) => {
  //     console.error(err.message)
  //   })
  // }




  const page = useSelector(global => global.activePage)
  const onPage = page === 'home'
  return (
    <div className="app">
      <Nav/>
      <Header />
      {onPage ? <PlantList /> : <Cart />}

      {/* <button className='get-fact' onClick={findPlantFact}>Get A Plant Fact</button>
      <p>{fact.fact}</p> */}

      <Routes>
      <Route path='/admin' element={<Admin />} />
     



      </Routes>
      
  
    </div>
  )
}

export default App



