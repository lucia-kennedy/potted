import { combineReducers } from 'redux'
import activePage from './activePage'
import cart from './cart'
import plants from './plantsReducer'



export default combineReducers({
  // otherReducer
  activePage,
  cart,
  plants
})
