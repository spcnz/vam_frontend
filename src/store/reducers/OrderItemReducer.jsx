import { 
    ADD_TO_ORDER, 
    DECREASE_QUANTITY, 
    INCREASE_QUANTITY, 
    REMOVE_PRODUCT, 
    UPDATE_QUANTITY } from '../actions/ActionTypes';

const initialState = {
    all : JSON.parse(localStorage.getItem('order'))?.all || [],
    total:  JSON.parse(localStorage.getItem('order'))?.total || 0,
  };

const orderItemReducer = (state = initialState, action) => {
    let newState = null;
    let productsChanged = [];
  
    switch (action.type) {
      case ADD_TO_ORDER:
        newState = {
          ...state, 
          all: [...state.all, action.payload], 
          total: state.total + (action.payload.price * action.payload.quantity) 
        }
        saveOrder(newState)
  
        return newState;
      case INCREASE_QUANTITY:
        productsChanged = state.all.map(product => {
          if (product.id === action.payload)
            return {...product, quantity : product.quantity + 1};
          return product;
        })
        newState = { all: productsChanged, total: calcTotal(productsChanged) };
        saveOrder(newState)
  
        return newState;
      case DECREASE_QUANTITY:
          productsChanged = state.all.map(product => {
            if (product.id === action.payload)
              return {...product, quantity : product.quantity - 1};
            return product;
          })
          newState = { all: productsChanged, total: calcTotal(productsChanged) };
          saveOrder(newState)
    
          return newState;
      case REMOVE_PRODUCT:
          productsChanged = state.all.filter(el => el.id !== action.payload);
          newState = { all: productsChanged, total: calcTotal(productsChanged)}
          saveOrder(newState)
  
          return newState;
      case UPDATE_QUANTITY:
        const { id, quantity } = action.payload;
        productsChanged = state.all.map(product => {
          if (product.id === id) 
            return {...product, quantity: quantity}
          return product;
        })
        newState = {all: productsChanged, total: calcTotal(productsChanged) };
        saveOrder(newState)
  
        return newState;
      default:
        return state;
    }
  };

const calcTotal = products => {
    return products.reduce((res,item) => res + item.price * item.quantity ,0)
  }
  
const saveOrder = order => {
    localStorage.setItem('order', JSON.stringify(order));
}

export default orderItemReducer;