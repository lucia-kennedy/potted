import React, { useState } from 'react'
import Nav from './Nav'
import { postPlants} from '../actions/index'
import {useDispatch} from 'react-redux'
import { Link } from 'react-router-dom'


function Admin() {
  const dispatch = useDispatch()

  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState('')


  
  
  const handleSubmit = (e) => {
    e.preventDefault()

    const newPlant = { name:name, price:price, image:image}

    dispatch(postPlants(newPlant))
    
    console.log(newPlant)
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
    <input className="input" type="text" placeholder="e.g Lily" id='name' name='name' onChange ={e => setName(e.target.value)}/>
  </div>
  <label className="label" htmlFor='price'>Price</label>
  <div className="control">
    <input className="input" type="text" placeholder="e.g $25" id='price' price='price' onChange ={e => setPrice(e.target.value)}/>
  </div>
  <label className="label" htmlFor='image'>Image</label>
  <div className="control">
    <input className="input" type="text" placeholder="e.g ../../images/lily.png" id='image' image='image' onChange ={e => setImage(e.target.value)}/>
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