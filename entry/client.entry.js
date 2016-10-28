/* eslint-env browser */
import {createElement} from 'react';
import {render} from 'react-dom';

import Root from 'component/root';
import createStore from 'store';

// Stylesheet for global browser elements. This doesn't belong in any single
// component because it does not target any.
import 'global.css';

const store = createStore();

render(<Root store={store}/>, document.getElementById('app'));
