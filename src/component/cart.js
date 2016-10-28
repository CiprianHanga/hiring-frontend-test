import {createElement} from 'react';
import map from 'lodash/fp/map';
import reduce from 'lodash/fp/reduce';
import {connect} from 'react-redux';
import styles from './styles.css';

import {clear} from '../action/cart';
import * as products from '../data/items';
import Heading from './heading';
import Item from './item';
import Svg from './svg';

const formatMoney = (value) => (
  <span>${value.toFixed(2)}</span>
);

const Cart = ({clear, total, items}) => {
  const header = (
    <Heading className={styles.cartTitle}>
      <Svg named='cart' className={styles.cartTitleIcon} />
      Your Cart
    </Heading>
  );

  if (items.length === 0) {
    return (
      <div className={styles.cartContainer}>
        <div className={styles.headingOuter}>
          {header}
        </div>

        <span className={styles.emptyCart}>Your cart is empty.</span>
      </div>
    );
  }

  return (
    <div className={styles.cartContainer}>
      <div className={styles.headingOuter}>
        {header}
        <button
          onClick={clear}
          className={styles.clearCartButton}
        >Empty cart</button>
      </div>

      <table className={styles.cartTable}>
        <tbody>
          {map((item) => <Item {...item} key={item.id} />, items)}
        </tbody>
      </table>

      <div className={styles.totalContainer}>
        <span className={styles.totalLabel}>Total</span>
        <span className={styles.totalAmount}>{formatMoney(total)}</span>
      </div>
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
