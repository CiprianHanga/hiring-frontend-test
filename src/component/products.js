import {createElement} from 'react';
import styles from './styles.css';
import map from 'lodash/fp/map';

import * as products from '../data/items';
import Product from './product';
import Heading from './heading';
import Svg from './svg';

export default () => (
  <div>
    <Heading>
      <Svg named='cup' className={styles.productsTitleIcon} />
      Products
    </Heading>

    {map((product) => <Product {...product} key={product.id}/>, products)}
  </div>
);
