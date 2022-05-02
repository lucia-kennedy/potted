import React, { useState } from 'react'
import Nav from './Nav'

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
    
    <div className='form'>
    <fieldset>
  <div className="field">
    <label className="label">Plant</label>
    <div className="control">
      <input className="input" type="text" placeholder="e.g Monstera"/>
    </div>
  </div>
  
  <div className="field">
    <label className="label">Price</label>
    <div className="control">
      <input className="input" type="email" placeholder="e.g. $25"/>
    </div>
  </div>
  
  </fieldset>
  </div>
 </>
   
  )
}

export default Admin