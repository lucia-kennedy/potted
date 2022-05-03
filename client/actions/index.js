import { getPlants, postPlant } from "../apiClient"

export const NAVIGATE = 'NAVIGATE'
export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const RECIEVE_PLANTS = 'RECIEVE_PLANTS'
export const SAVE_ALL_PLANTS = 'SAVE_ALL_PLANTS'
export const ADD_A_PLANT = 'ADD_A_PLANT'

//ACTIONS

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


export const addToCart = (id, name, price,) => {
  console.log("Hello Action")
  return {
    type: ADD_TO_CART,
    newPlant: {
      id: id,
      name: name,
      price:price,
      quantity: 1 } 
    }
  
}



export const removeFromCart = (id) => {
  return {
    type: REMOVE_FROM_CART,
    id: id
  }
}

export function SaveAllPlants (plants){
  return {
    type: 'SAVE_ALL_PLANTS',
    plants,
  }
}

export function sendError (msg) {
  return { 
    type: 'ERROR',
    msg
  }
}

export function addAPlant (plant) {
  return{
  type: 'ADD_A_PLANT',
  plant
 }
}

//THUNKS

export function getPlantsThunk () {
  return (dispatch) => {
    getPlants()
    .then((plants) => {
      dispatch(SaveAllPlants(plants))
    })
    .catch(err => {
      dispatch(sendError(err.message))
    })

  }
}

export function postPlants (plant) {
  return (dispatch) => {
    
    const anotherPlant = {
      name: plant.name,
      price: plant.price,
      image: plant.image
    }
    postPlant(anotherPlant)
    .then(() => {
     
    })
    .catch(err => {
      dispatch(sendError(err.message))
    })

  }
}

 



// export function receivePlants(plants) {
//   return {
//     type: RECIEVE_PLANTS,
//     plants,
//   }

// }


// export function getAllThePlants() {
//   return (dispatch) => {
    

//     getPlants()
//       .then((plantsArr) => {
//         console.log(plantsArr, 'thunk')
//         dispatch(receivePlants(plantsArr))
//       })
//       .catch((err) => {
//         console.log(err)
//       })
//   }
// }