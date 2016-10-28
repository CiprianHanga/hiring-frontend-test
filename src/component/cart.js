import {createElement} from 'react';
import map from 'lodash/fp/map';
import reduce from 'lodash/fp/reduce';
import {connect} from 'react-redux';
import styles from './styles.css';
import ReactSVG from 'react-svg';

import {clear, setQuantity} from '../action/cart';
import * as products from '../data/items';
import Heading from './heading';

const Item = connect(
  () => ({}),
  {setQuantity}
)(({id, quantity, setQuantity}) => {
  const {title, price} = products[id];
  const inc = () => setQuantity({id, quantity: quantity + 1});
  const dec = () => setQuantity({id, quantity: quantity - 1});
  return (
    <tr>
      <td>
        {title}
        <ReactSVG path={'icon-trash.svg'} className={styles.cartTrashIcon} />
      </td>
      <td>
        {price}
      </td>
      <td>
        {quantity}
        <a onClick={inc}>+</a> <a onClick={dec}>-</a>
      </td>
      <td>
        {price * quantity}
      </td>
    </tr>
  );
});

const Cart = ({clear, total, items}) => (
  <div>
    <Heading>
      <ReactSVG path={'icon-cart.svg'} className={styles.cartTitleIcon} />
      Cart
    </Heading>

    <button onClick={clear}>Clear all items</button>

    <table className={styles.cartTable}>
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {map((item) => <Item {...item} key={item.id} />, items)}
        <tr><td colSpan={3}/><td>TOTAL: {total}</td></tr>
      </tbody>
    </table>
  </div>
);

export default connect((state) => {
  return {
    items: state.cart.items,
    total: reduce(
      (sum, {id, quantity}) => sum + products[id].price * quantity,
      0,
      state.cart.items
    ),
  };
}, {clear})(Cart);
