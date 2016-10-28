import {createElement} from 'react';
import map from 'lodash/fp/map';
import reduce from 'lodash/fp/reduce';
import {connect} from 'react-redux';
import styles from './styles.css';

import {clear, setQuantity, removeItem, reduceOrRemoveItem} from '../action/cart';
import * as products from '../data/items';
import Heading from './heading';
import Item from './item';
import SVG from './svg';

let formatMoney = (value) => (
  <span>${value.toFixed(2)}</span>
);

const Cart = ({clear, total, items}) => {
  const header = (
    <Heading>
      <SVG named="cartIcon" className={styles.cartTitleIcon} />
      Cart
    </Heading>
  );

  if (items.length === 0) {
    return (
      <div>
        {header}
        Your cart is empty
      </div>
    )
  };

  return (
    <div>
      {header}

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
          <tr>
            <td colSpan={3}/>
            <td className={styles.cartTotalLabel}>{formatMoney(total)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

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
