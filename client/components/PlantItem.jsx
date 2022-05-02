import React from 'react'
import {useDispatch} from 'react-redux'
import {navigate, addToCart} from '../actions'
import {Link} from 'react-router-dom'


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

    
      <button className='addCart' onClick={addCart}><Link className='link' to={'/cart'}>Add to cart</Link></button>
   

  </div>
</div>
</div> 


      
)}

export default PlantItem


