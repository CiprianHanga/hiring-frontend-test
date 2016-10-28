import {createElement} from 'react';
import {add} from '../action/cart';
import {connect} from 'react-redux';
import styles from './styles.css';

const Product = ({add, id, title, image}) => (
  <div className={styles.product} onClick={() => add(id)}>
    <div style={{backgroundImage: 'url(' + image + ')'}} className={styles.productImage}></div>
    {title}
  </div>
);

export default connect(() => ({}), {add})(Product);
