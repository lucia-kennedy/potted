import { RECIEVE_PLANTS } from '../actions/index'

function plantsReducer(state = [], action) {
  switch (action.type) {
    case RECIEVE_PLANTS:
      return action.plants

    default:
      return state
  }
}

export default plantsReducer