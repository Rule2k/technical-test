import React from 'react';

import Content from 'src/components/Content';
import Form from 'src/containers/Form';
import Header from 'src/containers/Header';
import Nav from 'src/components/Nav';

import './app.scss';

const App = () => (
  <div id="app">
    <div id="top">
      <Header />
      <Form />
    </div>
    <div id="bottom">
      <Content />
      <Nav />
    </div>
  </div>
);

/**
 * Export
 */
export default App;
