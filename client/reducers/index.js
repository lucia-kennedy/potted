import { combineReducers } from 'redux'
import activePage from './activePage'
import cart from './cart'


export default combineReducers({
  // otherReducer
  activePage,
  cart
})
