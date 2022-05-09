import { ADD_A_PLANT, SAVE_ALL_PLANTS } from '../actions/index'

const initialState = []

function plants(state = initialState, action) {
  switch (action.type) {
    case SAVE_ALL_PLANTS:
    return action.plants
    case ADD_A_PLANT:
      return [...state, action.anotherPlant]
    case 'DEL_PLANT':
      return state.filter(plant => plant.id !== action.id)
    default:
      return state
  }
}

export default plants