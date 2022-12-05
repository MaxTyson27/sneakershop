const PLUS_SUM_IN_CART = 'PLUS_SUM_IN_CART'
const MINUS_SUM_IN_CART = 'MINUS_SUM_IN_CART'
const SET_CART_MODE = 'SET_CART_MODE'
const ADD_PRODUCT_IN_CART =  'ADD_PRODUCT_IN_CART'
const REMOVE_PRODUCT_IN_CART = 'REMOVE_PRODUCT_IN_CART'
const BUY_PRODUCTS = 'BUY_PRODUCTS'
const HIDE_SUCCESS_CARD = 'HIDE_SUCCESS_CARD'
const SHOW_SUCCESS_CARD = 'SHOW_SUCCESS_CARD'
const RESET_SUM_CART = 'RESET_CART'


let defaulState = {
  sum: 0,
  tax: 0,
  openCartMode: false,
  showSuccess: false,
  cart: [],
  boughtProducts: [],
}


const cartReducer = (state = defaulState, action) => {
  switch (action.type) {
    case HIDE_SUCCESS_CARD:
      return {
        ...state,
        showSuccess: false
      }

    case RESET_SUM_CART:
      return {
        ...state,
        sum: 0,
      }
    
    case SHOW_SUCCESS_CARD:
      return {
        ...state,
        showSuccess: true
      }

    case PLUS_SUM_IN_CART:
      return {
        ...state,
        sum: state.sum + action.price,
        tax: Math.round((state.sum + action.price) / 100 * 5)
      }
    
    case MINUS_SUM_IN_CART:
      return {
        ...state,
        sum: state.sum - action.price,
        tax: Math.round((state.sum - action.price) / 100 * 5)
      }
    
    case SET_CART_MODE:
      return {
        ...state,
        openCartMode: !state.openCartMode
      }
     
    case REMOVE_PRODUCT_IN_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => {
          return item.id !== action.id
        })
      }  

    case ADD_PRODUCT_IN_CART:
      const newProduct = {
        id: action.payload.id,
        price: action.payload.price,
        name: action.payload.name,
        image: action.payload.image
      }
      return {
        ...state,
        cart: [...state.cart, newProduct]
      }

    case BUY_PRODUCTS: 
      return {
        ...state,
        boughtProducts: [...state.boughtProducts, ...state.cart.map((item) => {
          return {
            ...item
          }
        })],
        cart: []
      }

    default:
      return state
  }
}

export const resetSumCart = () => ({
  type: RESET_SUM_CART
})

export const plusSumCart = (price) => ({
  type: PLUS_SUM_IN_CART,
  price
})


export const hideSuccess = () => ({
  type: HIDE_SUCCESS_CARD
})

export const setSuccess = () => ({
  type: SHOW_SUCCESS_CARD
})

export const buyProducts = () => ({
  type: BUY_PRODUCTS
})

export const minusSumCart = (price) => ({
  type: MINUS_SUM_IN_CART,
  price
})

export const setCartMode = () => ({
  type: SET_CART_MODE
})

export const addPoductInCart = (payload) => ({
  type: ADD_PRODUCT_IN_CART,
  payload
})

export const removeProductInCart = (id) => ({
  type: REMOVE_PRODUCT_IN_CART,
  id
})

export default cartReducer