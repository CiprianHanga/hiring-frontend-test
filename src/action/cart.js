import {ADD_ITEM, REMOVE_ITEM, SET_QUANTITY, CLEAR_ITEMS} from './types';
import {createAction} from 'redux-actions';

export const addItem = createAction(ADD_ITEM);
export const removeItem = createAction(REMOVE_ITEM);
export const setQuantity = createAction(SET_QUANTITY);
export const clear = createAction(CLEAR_ITEMS);

export function add(itemID) {
  return function(dispatch, getState) {
    const cartItems = getState().cart.items;
    const existingItem = cartItems.find((item) => item.id === itemID);

    if (!existingItem) return dispatch(addItem(itemID));

    const newQuantity = existingItem.quantity + 1;
    return dispatch(setQuantity({
      id: itemID,
      quantity: newQuantity,
    }));
  };
}

export function reduceOrRemoveItem(itemID) {
  return function(dispatch, getState) {
    const cartItem = getState().cart.items.find((item) => item.id === itemID);
    const itemQuantity = cartItem.quantity;

    if (itemQuantity === 1) return dispatch(removeItem(itemID));

    const newQuantity = itemQuantity - 1;
    return dispatch(setQuantity({
      id: itemID,
      quantity: newQuantity,
    }));
  };
}
