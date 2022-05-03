import React, { useState } from 'react'
import Nav from './Nav'
import {postPlants} from '../actions/index'

function Admin() {
  // const [name, setName] = useState('')
  
  // const handleType = (e) => {
  //   setName(e.target.value)
  // }
  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   console.log(name)
  // }


  return (
    <>
    <Nav />

    <h2>Add a Plant</h2>
    
    <form action='/' method='post'>
    <label htmlFor='name'>Plant</label>
    <input type='text' id='name' name='name'></input>
    <button>Submit</button>





    </form>
  
  
  
 </>
   
  )
}

export default Admin