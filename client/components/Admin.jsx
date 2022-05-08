import React, { useState } from 'react'
import Nav from './Nav'
import { postPlants} from '../actions/index'
import {useSelector, useDispatch} from 'react-redux'

function Admin() {
  const dispatch = useDispatch()
  const plantIds = useSelector(globalState => globalState.plants.map(plant => plant.id))

  const [name, setName] = useState(
    {
      name:'Lily',
      price:'$20',
      image:'../../images/lily.png ',

    }
  )
  
  // const handleType = (e) => {
  //   setName(e.target.value)
  // }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(postPlants(name))
    console.log(name)
  }

  

  
  return (
    <>
    <Nav />

  
    
  <div className='form'>
  <img src='../../images/admin.png' className='admin'/>
  <div className="field">
  <form onSubmit={handleSubmit} className='form-1'>
  <label className="label" htmlFor='name'>Plant</label>
  <div className="control">
    <input className="input" type="text" placeholder="e.g Lily" id='name' name='name'/>
  </div>
  <label className="label" htmlFor='price'>Price</label>
  <div className="control">
    <input className="input" type="text" placeholder="e.g $25" id='price' price='price'/>
  </div>
  <label className="label" htmlFor='image'>Image</label>
  <div className="control">
    <input className="input" type="text" placeholder="e.g ../../images/lily.png" id='image' image='image'/>
  </div>

  <div className="control button-1">
  <button className="button is-primary">Submit</button>
</div>

</form>
</div>
</div>
  
  
  
 </>
   
  )
}

export default Admin