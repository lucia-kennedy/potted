import React from 'react'
import PlantItem from './PlantItem'
import plantData from '../../data/data'

function PlantList() {
  return (
    <div className="overflow">
      {plantData.plants.map((plant) => {
        return <PlantItem key={plant.id} plants={plant}/>
        
      })}
    </div>

  )
}

export default PlantList