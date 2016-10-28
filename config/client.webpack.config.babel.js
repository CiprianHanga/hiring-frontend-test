import compose from 'lodash/fp/flowRight';
import stats from 'webpack-config-stats';
import entry from 'webpack-config-entry';
import sourceMaps from 'webpack-config-source-maps';
import postcss from 'webpack-config-postcss';
import babel from 'webpack-config-babel';
import root from 'webpack-config-root';
import json from 'webpack-config-json';

import {output} from 'webpack-partial';

const base = compose(
  root('src'),
  json(),
  babel(),
  postcss(),
  sourceMaps(),
);

export default compose(
  base,
  stats('client.stats.json'),
  output({publicPath: '/assets'}),
  entry({name: 'client', output: 'build'}),
)({target: 'web'});
