
import '@babel/polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import store from 'src/store';
import App from 'src/components/App';

const rootComponent = <Provider store={store}><Router><App /></Router></Provider>;
const target = document.getElementById('root');
// 1 - Le composant à rendre
// 2 - La cible dans le DOM
render(rootComponent, target);
