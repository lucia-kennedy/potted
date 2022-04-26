import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions'



function reducer (state=[], action) {
    switch (action.type) {
    case ADD_TO_CART:
      // eslint-disable-next-line no-case-declarations
    
      return [ ...state, action.newPlant ]
      case REMOVE_FROM_CART:
      return state.filter((plant) => plant.id !== action.id)
      
    default:
      return state
  }
}

export default reducer