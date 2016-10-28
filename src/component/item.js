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
  const {title, price, image} = products[id];

  const increase = () => setQuantity({id, quantity: quantity + 1});
  const decrease = () => reduceOrRemoveItem(id);
  const remove = () => removeItem(id);

  return (
    <tr>
      <td className={styles.cartItemImageContainer}>
        <img src={image} className={styles.cartItemImage} alt={title} />

        <a href='#' onClick={remove}>
          <Svg named='trash' className={styles.cartItemTrashIcon} />
        </a>
      </td>

      <td>
        <span className={styles.cartItemTitle}>{title}</span>

        <p className={styles.cartItemMeta}>
          {quantity} at {formatMoney(price)}

          <a href="#" onClick={increase}>
            <Svg named='plus' className={styles.cartItemPlusIcon} />
          </a>

          <a href="#" onClick={decrease}>
            <Svg named='minus' className={styles.cartItemMinusIcon} />
          </a>
        </p>
      </td>

      <td className={styles.cartItemTotal}>
        {formatMoney(price * quantity)}
      </td>
    </tr>
  );
};

export default connect(() => ({}), {
  setQuantity, removeItem, reduceOrRemoveItem,
})(Item);
