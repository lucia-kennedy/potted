import { SAVE_ALL_PLANTS } from '../actions/index'

const initial = [
  {
    id: 1,
    name: 'Snake Plant',
    price: '$50',
    image: '../../images/pot1.png'
  }

]

function plants(state = initial, action) {
  switch (action.type) {
    case SAVE_ALL_PLANTS:
    return action.plants

    default:
      return state
  }
}

export default plants