import {createElement} from 'react';
import {connect} from 'react-redux';
import styles from './styles.css';

import {setQuantity, removeItem, reduceOrRemoveItem} from '../action/cart';
import * as products from '../data/items';
import Svg from './svg';

const formatMoney = (value) => (
  <span>${value.toFixed(2)}</span>
);

const Item = ({setQuantity, removeItem, reduceOrRemoveItem, id, quantity}) => {
  const {title, price} = products[id];

  const increase = () => setQuantity({id, quantity: quantity + 1});
  const decrease = () => reduceOrRemoveItem(id);
  const remove = () => removeItem(id);

  return (
    <tr>
      <td>
        {title}
        <a href='#' onClick={remove}>
          <Svg named='trash' className={styles.cartTrashIcon} />
        </a>
      </td>

      <td>{formatMoney(price)}</td>

      <td>
        <span className={styles.cartQuantityLabel}>
          {quantity}
        </span>

        <a onClick={increase}>
          <Svg named='plus' className={styles.cartPlusIcon} />
        </a>

        <a onClick={decrease}>
          <Svg named='minus' className={styles.cartMinusIcon} />
        </a>
      </td>

      <td>{formatMoney(price * quantity)}</td>
    </tr>
  );
};

export default connect(() => ({}), {
  setQuantity, removeItem, reduceOrRemoveItem,
})(Item);
