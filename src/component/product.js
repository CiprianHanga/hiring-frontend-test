import {createElement} from 'react';
import {add} from '../action/cart';
import {connect} from 'react-redux';
import styles from './styles.css';

const Product = ({add, id, title, image}) => (
  <a href="#" className={styles.product} onClick={() => add(id)}>
    <img src={image} className={styles.productImage} alt={title} />
    {title}
  </a>
);

export default connect(() => ({}), {add})(Product);
