import React from "react";
import thunk from "redux-thunk";
import Router from "./router";
import { createBrowserHistory } from "history";
import { createStore, applyMiddleware, compose } from "redux";
import { generateReducers } from "./reducers";
import { routerMiddleware } from "connected-react-router";
import { Provider } from "react-redux";


export const history = createBrowserHistory();

const middlewares = [
  applyMiddleware(routerMiddleware(history), thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : (f) => f,
];

const store = createStore(generateReducers(history), compose(...middlewares));

const App = () => {
  
  return (
    <Provider store={store}>
      <Router history={history} />
    </Provider>
  );
};

export default App;
