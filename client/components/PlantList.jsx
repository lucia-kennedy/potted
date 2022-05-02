import React from 'react'
import PlantItem from './PlantItem'
// import plantData from '../../data/data'
import { useSelector } from 'react-redux'
import Facts from './Facts'
import Nav from './Nav'


function PlantList() {
  const plants = useSelector(globalState => globalState.plants)
  return (
    <>
    <Nav />
    <div className='display' >
      {plants.map((plant) => {
        return <PlantItem key={plant.id} plants={plant}/>
        })}
    </div>

    <Facts />
  </>

  )
}

export default PlantList