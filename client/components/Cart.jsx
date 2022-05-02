import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {navigate, removeFromCart} from '../actions'
// import Admin from './Admin'
import Nav from './Nav'
import {Link} from 'react-router-dom'

function Cart() {
    const cart = useSelector(globalState => globalState.cart)
    const dispatch = useDispatch()
    const remove = (id) => {dispatch(removeFromCart(id))}
    // console.log(cart)
    // const continueShopping = (e) => {
    //   e.preventDefault()
    //   dispatch(navigate('home'))
    // }
  
    
      return (
      <>
      <Nav />
      <div className="cart">
        <h1 className='item'>Items in Cart</h1>
        <table>
          <thead>
            <tr className='cart-header'>
              <td>Plant</td>
              <td>Price</td>
              <td>Quantity</td>
              <td>Remove</td>
            </tr>
          </thead>
          
          <tbody className='cart-body'>
            {cart.map(({ id, name, quantity, price}) => {
              return (
              
                <tr key={id}>
                  <td>{name}</td>
                  <td>{price}</td>
                  <td>
                    <input className="update-input" value={quantity} />
                  </td>
                  <td>
                  
                      <img className='bin' onClick={() => remove(id)} src='../../images/bin.png'/>
                
                  </td>
                </tr>
                
              )
            })}
          </tbody>
        </table>
        
  
        <p className="actions">
          <a className='conshop'><Link to={'/'}>Continue shopping</Link></a>
          <button className='checkout'>Update</button> {/* TODO: implement updates */}
          <button  className='checkout'>Checkout</button>
        </p>
      </div>
      </>
    )
  }
  
  export default Cart