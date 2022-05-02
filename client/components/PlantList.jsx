import React from 'react'
import PlantItem from './PlantItem'
// import plantData from '../../data/data'
import { useSelector } from 'react-redux'


function PlantList() {
  const plants = useSelector(globalState => globalState.plants)
  return (
    
    <div className='display' >
      {plants.map((plant) => {
        return <PlantItem key={plant.id} plants={plant}/>
        })}
    </div>
  

  )
}

export default PlantList