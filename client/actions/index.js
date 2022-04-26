export const NAVIGATE = 'NAVIGATE'
export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

export const actionCreatorName = () => {
  return {
    type: 'ACTION_TYPE',
  }
}

export const navigate = (page) => {
  return {
    type: NAVIGATE,
    page: page // 'home' or 'cart'
  }
}


export const addToCart = (id, name,) => {
  console.log("Hello Action")
  return {
    type: ADD_TO_CART,
    newPlant: {
      id: id,
      name: name,
      quantity: 1 } 
    }
  
}



export const removeFromCart = (id) => {
  return {
    type: REMOVE_FROM_CART,
    id: id
  }
}
