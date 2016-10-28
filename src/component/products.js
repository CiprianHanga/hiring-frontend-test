import {createElement} from 'react';
import Product from './product';
import * as products from '../data/items';
import Heading from './heading';

export default () => (
  <div>
    <Heading>Products</Heading>
    <Product {...products.cake}/>
    <Product {...products.waffle}/>
    <Product {...products.chocolate}/>
  </div>
);
