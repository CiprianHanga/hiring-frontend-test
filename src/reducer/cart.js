import {handleActions} from 'redux-actions';
import {CLEAR_ITEMS, ADD_ITEM, REMOVE_ITEM, SET_QUANTITY} from 'action/types';
import map from 'lodash/fp/map';
import filter from 'lodash/fp/filter';

export default handleActions({
  [CLEAR_ITEMS]: () => ({
    items: [],
  }),
  [ADD_ITEM]: (state, {payload: id}) => ({
    ...state,
    items: [
      ...state.items,
      {id, quantity: 1},
    ],
  }),
  [REMOVE_ITEM]: (state, {payload: id}) => ({
    ...state,
    items: filter((item) => (
      item.id !== id
    ), state.items),
  }),
  [SET_QUANTITY]: (state, {payload: {id: target, quantity}}) => ({
    ...state,
    items: map(({id, ...rest}) => (
      target === id ? {id, ...rest, quantity} : {id, ...rest}
    ), state.items),
  }),
}, {
  items: [],
});
