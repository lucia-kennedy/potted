import React from 'react'
import PlantItem from './PlantItem'
// import plantData from '../../data/data'
import { useDispatch, useSelector } from 'react-redux'
import Facts from './Facts'
import Nav from './Nav'
import { removePlant } from '../actions'


function PlantList() {
  const dispatch = useDispatch()
  const plants = useSelector(globalState => globalState.plants)

  const handleDelete = (id) => {
    dispatch(removePlant(id))
  }
  return (
    <>
    <Nav />
    <div className='display' >
      {plants.map((plant) => {
        return <><PlantItem key={plant.id} plants={plant} /><button className='delete' onClick={() => handleDelete(plant.id)}>Delete</button></>

        })}
    
    </div>

    <Facts />
  </>

  )
}

export default PlantList