import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { ToastContainer, Flip } from 'react-toastify';

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
        <ToastContainer
            transition={Flip}
            position="top-center"
            autoClose={2000}
            closeOnClick
            pauseOnHover
        />
    </Provider>,
);
