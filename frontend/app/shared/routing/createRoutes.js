// @flow

import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from 'App';
import Home from 'App/screens/Home';
import SplatRouter from 'App/screens/SplatRouter/component';
import ArticleOverview from 'App/screens/ArticleOverview/component';

const createRoutes = (): React.Element<any> => (
  <Route component={App} path="/">
    <IndexRoute component={Home} />
    <Route path="articles" component={ArticleOverview}>
      <Route path=":page" component={ArticleOverview} />
    </Route>
    <Route path="*" component={SplatRouter} />
  </Route>
);

export default createRoutes;
