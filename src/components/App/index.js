import React from 'react';

import Content from 'src/components/Content';
import Form from 'src/containers/Form';
import Header from 'src/containers/Header';
import Nav from 'src/components/Nav';
import { Route, Switch } from 'react-router-dom';
import { selectDataBySlug } from 'src/data';

import './app.scss';

const App = () => (
  <div id="app">
    <div id="top">
      <Header />
      <Form />
    </div>
    <div id="bottom">
      <Switch>
        <Route
          exact
          path="/:slug"
          render={({ match }) => {
            const { slug } = match.params;
            const data = selectDataBySlug(slug);
            return (
              <Content {...data} />
            );
          }}
        />
        <Route
          exact
          path="/"
          component={Content}
        />
      </Switch>
      <Nav />
    </div>
  </div>
);

/**
 * Export
 */
export default App;
