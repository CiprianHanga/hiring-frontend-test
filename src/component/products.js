import {createElement} from 'react';
import styles from './styles.css';
import map from 'lodash/fp/map';

import * as products from '../data/items';
import Product from './product';
import Heading from './heading';
import SVG from './svg';

export default () => (
  <div>
    <Heading>
      <SVG named="cupIcon" className={styles.productsTitleIcon} />
      Products
    </Heading>

    {map((product) => <Product {...product} key={product.id}/>, products)}
  </div>
);
