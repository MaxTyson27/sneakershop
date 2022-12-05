import image1 from '../images/sneakers/1.jpg'
import image2 from '../images/sneakers/2.jpg'
import image3 from '../images/sneakers/3.jpg'
import image4 from '../images/sneakers/4.jpg'
import image5 from '../images/sneakers/5.jpg'
import image6 from '../images/sneakers/6.jpg'
import image7 from '../images/sneakers/7.jpg'
import image8 from '../images/sneakers/8.jpg'
import image9 from '../images/sneakers/9.jpg'
import image10 from '../images/sneakers/10.jpg'
import image11 from '../images/sneakers/11.jpg'
import image12 from '../images/sneakers/12.jpg'

const TOGGLE_CART_BTN = 'TOGGLE_CART_BTN'
const TOGGLE_FAVOURITE_BTN = 'TOGGLE_FAVOURITE_BTN'
const IS_EMPTY_FAVOURITES = 'IS_EMPTY_FAVOURITES'
const RESET_BUTTONS_IN_CARD = 'RESET_BUTTONS_IN_CARD'

let defaulState = {
  sneakers: [
    {
      id: 1, 
      image: image1,
      name: 'Мужские Кроссовки Nike Blazer Mid Suede', 
      price: '12 999',
      isFavourite: false,
      isCart: false, 
    },
    {
      id: 2, 
      image: image2,
      name: 'Мужские Кроссовки Nike Air Max 270', 
      price: '12 999',
      isFavourite: false,
      isCart: false, 
    },
    {
      id: 3, 
      image: image3,
      name: 'Мужские Кроссовки Nike Blazer Mid Suede', 
      price: '8 499',
      isFavourite: false,
      isCart: false, 
    },
    {
      id: 4, 
      image: image4,
      name: 'Кроссовки Puma X Aka Boku Future Rider', 
      price: '8 499',
      isFavourite: false,
      isCart: false, 
    },
    {
      id: 5, 
      image: image5,
      name: 'Мужские Кроссовки Under Armour Curry 8', 
      price: '15 199',
      isFavourite: false,
      isCart: false, 
    },
    {
      id: 6, 
      image: image6,
      name: 'Мужские Кроссовки Nike Kyrie 7', 
      price: '11 299',
      isFavourite: false,
      isCart: false, 
    },
    {
      id: 7, 
      image: image7,
      name: 'Мужские Кроссовки Jordan Air Jordan 11', 
      price: '10 799',
      isFavourite: false,
      isCart: false, 
    },
    {
      id: 8, 
      image: image8,
      name: 'Мужские Кроссовки Nike LeBron XVIII', 
      price: '16 499',
      isFavourite: false,
      isCart: false, 
    },
    {
      id: 9, 
      image: image9,
      name: 'Мужские Кроссовки Nike Lebron XVIII Low', 
      price: '13 999',
      isFavourite: false,
      isCart: false, 
    },
    {
      id: 10, 
      image: image10,
      name: 'Мужские Кроссовки Nike Blazer Mid Suede', 
      price: '8 499',
      isFavourite: false,
      isCart: false, 
    },
    {
      id: 11, 
      image: image11,
      name: 'Кроссовки Puma X Aka Boku Future Rider', 
      price: '8 999',
      isFavourite: false,
      isCart: false, 
    },
    {
      id: 12, 
      image: image12,
      name: 'Мужские Кроссовки Nike Kyrie Flytrap IV', 
      price: '11 299',
      isFavourite: false,
      isCart: false, 
    },
  ],
  isEmptyFavouirites: true,
}


const productReducer = (state = defaulState, action) => {
  switch (action.type) {
    case RESET_BUTTONS_IN_CARD:
      return {
        ...state,
        sneakers: state.sneakers.map((item) => {
          return {
            ...item,
            isCart: false,
          }
        })
      }
    case TOGGLE_CART_BTN:
      return {
        ...state,
        sneakers: state.sneakers.map((item) => {
          if(item.id === action.id){
            return {
              ...item,
              isCart: !item.isCart
            }
          }
          return item
        })
      }
      
    case TOGGLE_FAVOURITE_BTN:
      return {
        ...state,
        sneakers: state.sneakers.map((item) => {
          if(item.id === action.id){
            return {
              ...item,
              isFavourite: !item.isFavourite
            }
          }
          return item
        })
      }

    case IS_EMPTY_FAVOURITES:
      return {
        ...state,
        isEmptyFavouirites: state.sneakers.find((item) => {
          return item.isFavourite === true
        })
      }

    default:
      return state
  }
}

export const resetBtns = () => ({
  type: RESET_BUTTONS_IN_CARD,
})

export const toggleCartBtn = (id) => ({
  type: TOGGLE_CART_BTN,
  id
})

export const toggleFavouriteBtn = (id) => ({
  type: TOGGLE_FAVOURITE_BTN,
  id
})

export const showEmptyBlockInFavourites = () => ({
  type: IS_EMPTY_FAVOURITES
})



export default productReducer