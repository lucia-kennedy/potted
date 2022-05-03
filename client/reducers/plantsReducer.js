import { ADD_A_PLANT, SAVE_ALL_PLANTS } from '../actions/index'



function plants(state = [], action) {
  switch (action.type) {
    case SAVE_ALL_PLANTS:
    return action.plants
    case ADD_A_PLANT:
      return [...state, action.plant]
    default:
      return state
  }
}

export default plants