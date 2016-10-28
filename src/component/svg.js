import {createElement} from 'react';
import * as svgs from '../data/svgs';

const SVG = (props) => {
  return (
    <span className={props.className}>{svgs[props.named]}</span>
  )
};

export default SVG;
