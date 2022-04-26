import React from 'react'
import {useDispatch} from 'react-redux'
import {navigate, addToCart} from '../actions'

function PlantItem(props) {
    const dispatch = useDispatch()
  
    const addCart = (e) => {
      e.preventDefault()
      dispatch(navigate('cart'))
      dispatch(addToCart(id, name, price, image))
    }


const {id, name, price, image} = props.plants

return (

<div>

<div className="card">
  <div className="container">
  <img className='image' src={image} alt={name}/>
    <h4><b>{name}</b></h4>
    <p>{price}</p>
    <button className='addCart' onClick={addCart}>Add to cart</button>
  </div>
</div>
</div> 


      
)}

export default PlantItem


