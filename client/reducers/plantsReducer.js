import { SAVE_ALL_PLANTS } from '../actions/index'



function plants(state = [], action) {
  switch (action.type) {
    case SAVE_ALL_PLANTS:
    return action.plants

    default:
      return state
  }
}

export default plants