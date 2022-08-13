import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import { ToastContainer } from 'react-toastify';

import GlobalStyle from 'style/GlobalStyle';
import App from './App';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <RecoilRoot>
        <App />
        <GlobalStyle />
        <ToastContainer autoClose={1000} />
    </RecoilRoot>,
);
