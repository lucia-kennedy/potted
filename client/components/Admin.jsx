import React, { useState } from 'react'
import Nav from './Nav'

function Admin() {
  const [name, setName] = useState('')
  
  const handleType = (e) => {
    setName(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name)
  }
  return (
    <>
    <Nav />
    <h2>Add a Plant</h2>
   <form onSubmit={handleSubmit}>
    <label htmlFor='name'>Plant Name</label>
    <input id='name' type='text' onChange={handleType} value={name}></input>
    <button></button>
   </form>
</>

  )
}

export default Admin