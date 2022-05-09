import { delPlant, getPlants, postAPlant } from "../apiClient"

export const NAVIGATE = 'NAVIGATE'
export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const RECIEVE_PLANTS = 'RECIEVE_PLANTS'
export const SAVE_ALL_PLANTS = 'SAVE_ALL_PLANTS'
export const ADD_A_PLANT = 'ADD_A_PLANT'
export const DEL_PLANT = 'DEL_PLANT'

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

export function addAPlant (anotherPlant) {
  return{
  type: 'ADD_A_PLANT',
  anotherPlant,
 }
}

export function ditchPlant (id) {
  return {
    type: 'DEL_PLANT',
    id
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

export function postPlants (anotherPlant) {
  return (dispatch) => {
    // const anotherPlant = {
    //   name: plant.name,
    //   price: plant.price,
    //   image: plant.image
    // }
    postAPlant(anotherPlant)
    .then((plantFromDB) => {
      console.log(plantFromDB, 'thunk')
     return dispatch(addAPlant(plantFromDB))
    })
    .then(() => {
      return dispatch(getPlantsThunk())
    })
      .catch(err => {
      dispatch(sendError(err.message))
    })
  }
}


export function removePlant (id) {
  return (dispatch) => {
    delPlant(id)
      .then(() => {
        dispatch(ditchPlant(id))
      })
      .catch(err => {
        dispatch(sendError(err.message))
      })
  }
}



