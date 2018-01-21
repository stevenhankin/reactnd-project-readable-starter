import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './styles/index.css';
import App from './scenes/Default/index.js';
import CategoryView from './scenes/Default/scenes/CategoryView/index.js';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

const reducer = (state, action) => {
  return state;
};

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div className="container-fluid">
        <Route exact path="/" component={App} />
        <Route path="/categories/:category" component={CategoryView} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();