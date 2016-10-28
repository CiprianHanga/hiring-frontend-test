import {createElement, createClass} from 'react';

// TODO
// While this works as desired it fails linting with
// Parse errors in imported module '../data/svgs.json':
//   Line 2: Unexpected token, expected ; (2:10)
// Needs to be fixed. How fix???!!!
import {icons} from '../data/svgs.json';

// TODO
// This SVG system could be greatly improved. I did a neat helper for a
// Rails app - could be a cool future item to add here.

const Svg = createClass({
  componentDidMount: function() {
    const icon = icons[this.props.named];
    this.refs.svgData.innerHTML = icon.data;
  },
  render: function() {
    const icon = icons[this.props.named];
    return (
      <span className={this.props.className}>
        <svg
          viewBox={`0 0 ${icon.size[0]} ${icon.size[1]}`}
          xmlns='http://www.w3.org/2000/svg'
        >
          <g fillRule='evenodd' ref='svgData'></g>
        </svg>
      </span>
    );
  },
});

export default Svg;
