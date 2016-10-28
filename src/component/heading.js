import {createElement} from 'react';
import styles from './styles.css';

const Heading = ({children}) => (
  <h1 className={styles.heading}>{children}</h1>
);

export default Heading;
