import {createElement} from 'react';
import {connect} from 'react-redux';
import styles from './styles.css';

import {setQuantity, removeItem, decreaseOrRemoveItem} from '../action/cart';
import * as products from '../data/items';
import SVG from './svg';

let formatMoney = (value) => (
  <span>${value.toFixed(2)}</span>
);

const Item = ({setQuantity, removeItem, decreaseOrRemoveItem, id, quantity}) => {
  const {title, price} = products[id];
  const increase = () => setQuantity({id, quantity: quantity + 1});
  const decrease = () => decreaseOrRemoveItem(id);
  const remove = () => removeItem(id);

  return (
    <tr>
      <td>
        {title}
        <a href="#" onClick={remove}>
          <SVG named="trashIcon" className={styles.cartTrashIcon} />
        </a>
      </td>
      <td>
        {formatMoney(price)}
      </td>
      <td>
        <span className={styles.cartQuantityLabel}>
          {quantity}
        </span>

        <a onClick={increase}>
          <SVG named="plusIcon" className={styles.cartPlusIcon} />
        </a>

        <a onClick={decrease}>
          <SVG named="minusIcon" className={styles.cartMinusIcon} />
        </a>
      </td>
      <td>
        {formatMoney(price * quantity)}
      </td>
    </tr>
  )
};

export default connect(() => ({}), {setQuantity, removeItem, decreaseOrRemoveItem})(Item);
