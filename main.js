import { render } from 'react-dom';
import React from 'react';
import store from './src/store'
import Container from './src/Container'
import { Provider } from 'react-redux';

render(
    <Provider store={store}>
        <Container/>
    </Provider>
    ,
    document.getElementById('root')
);