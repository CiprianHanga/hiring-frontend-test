import {createElement} from 'react';
import styles from './styles.css';
import Product from './product';
import * as products from '../data/items';
import Heading from './heading';
import ReactSVG from 'react-svg';

export default () => (
  <div>
    <Heading>
      <ReactSVG path={'icon-cup.svg'} className={styles.productsTitleIcon} />
      Products
    </Heading>

    <Product {...products.cake}/>
    <Product {...products.waffle}/>
    <Product {...products.chocolate}/>
  </div>
);
