import React from 'react';

import Content from 'src/components/Content';
import Form from 'src/components/Form';
import Header from 'src/components/Header';
import Nav from 'src/components/Nav';

import './app.scss';

const App = () => (
  <div id="app">
    <div id="top">
      <Header />
      <Content />
    </div>
    <div id="bottom">
      <Form />
      <Nav />
    </div>
  </div>
);

/**
 * Export
 */
export default App;
