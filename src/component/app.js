import {createElement} from 'react';
import styles from './styles.css';

import Cart from './cart';
import Products from './products';

export default () => (
  <div className={styles.appInner}>
    <Products/>
    <Cart/>
  </div>
);
