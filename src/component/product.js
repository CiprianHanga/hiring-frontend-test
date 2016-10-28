import {createElement} from 'react';
import {add} from '../action/cart';
import {connect} from 'react-redux';
import styles from './styles.css';

const Product = ({add, id, title, image}) => (
  <div className={styles.product} onClick={() => add(id)}>
    <img src={image} alt={title} className={styles.productImage}/>
    {title}
  </div>
);

export default connect(() => ({}), {add})(Product);
