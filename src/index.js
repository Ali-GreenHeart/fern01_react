import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

import { createStore } from 'redux';
import { rootReducer } from './reducers/reduxReducer';


const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(rootReducer)

root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

