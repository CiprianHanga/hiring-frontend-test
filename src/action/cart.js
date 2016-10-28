import {ADD_ITEM, REMOVE_ITEM, SET_QUANTITY, CLEAR_ITEMS} from './types';
import {createAction} from 'redux-actions';

export const addItem = createAction(ADD_ITEM);
export const removeItem = createAction(REMOVE_ITEM);
export const setQuantity = createAction(SET_QUANTITY);
export const clear = createAction(CLEAR_ITEMS);

export function add(itemID) {
  return function(dispatch, getState) {
    let existingItem = getState().cart.items.find((item) => { return item.id === itemID });

    if (!existingItem) return dispatch(addItem(itemID));

    let newQuantity = existingItem.quantity + 1;
    return dispatch(setQuantity({ id: itemID, quantity: newQuantity }));
  };
};

export function decreaseOrRemoveItem(itemID) {
  return function(dispatch, getState) {
    let cartItem = getState().cart.items.find((item) => { return item.id === itemID });
    let itemQuantity = cartItem.quantity;

    if (itemQuantity === 1) return dispatch(removeItem(itemID));

    let newQuantity = itemQuantity - 1;
    return dispatch(setQuantity({ id: itemID, quantity: newQuantity }));
  };
}
