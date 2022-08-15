import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import GlobalStyle from 'style/GlobalStyle';
import rootReducer from './modules';
import App from './App';
import 'react-toastify/dist/ReactToastify.css';

const store = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
        <App />
        <GlobalStyle />
        <ToastContainer autoClose={1000} />
    </Provider>,
);
