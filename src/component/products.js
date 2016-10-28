import {createElement} from 'react';
import styles from './styles.css';
import map from 'lodash/fp/map';

import * as products from '../data/items';
import Product from './product';
import Heading from './heading';
import Svg from './svg';

export default () => (
  <div className={styles.productsContainer}>
    <div className={styles.headingOuter}>
      <Heading>
        <Svg named='cup' className={styles.productsTitleIcon} />
        Available Products
      </Heading>
    </div>

    {map((product) => <Product {...product} key={product.id}/>, products)}
  </div>
);
