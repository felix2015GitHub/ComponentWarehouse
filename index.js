import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers';
import Main from './src/Main';

const store = createStore(reducers, window.devToolsExtension && window.devToolsExtension());

render(
    <Provider store={store}>
        <Main />
    </Provider>, document.getElementById('root');
)
