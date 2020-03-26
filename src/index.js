import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import Home from './home';
import MyHome from './my-home';
import myStore from './my-store';

ReactDOM.render((
  // <Provider store={store}>
  //   <Home />
  // </Provider>
  <MyHome store={myStore} />
), document.getElementById('root'));
