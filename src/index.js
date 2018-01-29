import React from 'react';
import { render } from 'react-dom';
import App from './App';
import ChuckNorrisApp from './reducers';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';

const middleware = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
}

const store = createStore(
    ChuckNorrisApp,
    applyMiddleware(...middleware)
);

render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root')
)

