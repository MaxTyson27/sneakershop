
const ADD_PRODUCT_IN_FAVOURITE = 'ADD_PRODUCT_IN_FAVOURITE'

const defaulState = {
  favourite: []
}



const favouriteReducer = (state = defaulState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_IN_FAVOURITE:
      return {
        ...state
      }
  
    default:
      return state
  }
}



export const addProductInFav = (id) => ({
  type: ADD_PRODUCT_IN_FAVOURITE,
  id
})


export default favouriteReducer