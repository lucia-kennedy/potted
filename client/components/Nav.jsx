import React from 'react'
import { useDispatch } from 'react-redux'
import {navigate} from '../actions'

function Nav() {
const dispatch = useDispatch()

  
const addCart = (e) => {
    e.preventDefault()
    dispatch(navigate('cart'))
}
	

return (
<div>
<input className="menu-icon" type="checkbox" id="menu-icon" name="menu-icon"/>
  	<label htmlFor="menu-icon"></label>
  	<nav className="nav"> 		
  		<ul className="pt-5">
            <li><a onClick={()=>dispatch(navigate('home'))}>Home</a></li>
  			<li><a onClick={addCart}>Cart</a></li>
			  <li><a>Admin</a></li>
  		</ul>
  	</nav>
</div>
      
)}

export default Nav










