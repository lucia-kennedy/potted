import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {navigate, removeFromCart} from '../actions'

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
      <div className="cart">
        <table>
          <thead>
            <tr>
              <td>Plant</td>
              <td>Quantity</td>
              <td>Remove</td>
            </tr>
          </thead>
          <tbody>
            {cart.map(({ id, name, quantity}) => {
              return (
                <tr key={id}>
                  <td>{name}</td>
                  <td>
                    <input className="update-input" value={quantity} />
                  </td>
                  
                  <td>
                    <button>
                      <span className='' onClick={() => remove(id)} > Remove </span>
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
  
        <p className="actions">
          <a onClick={()=>dispatch(navigate('home'))}>Continue shopping</a>
          <button>Update</button> {/* TODO: implement updates */}
          <button  className="button-primary">Checkout</button>
        </p>
      </div>
    )
  }
  
  export default Cart