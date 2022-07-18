import React from 'react';
import { createGlobalStyle } from 'styled-components';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import { ToastContainer } from 'react-toastify';

// import reportWebVitals from './reportWebVitals';
import App from './App';
import '@assets/css/index.css';
import '@assets/css/reset.css';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const GlobalStyle = createGlobalStyle`
a {
  text-decoration: none;
}

button {
  outline: none;
  background-color: transparent;
  cursor: pointer;}
`;

root.render(
    <RecoilRoot>
        <App />
        <GlobalStyle />
        <ToastContainer autoClose={1000} />
    </RecoilRoot>,
);

// reportWebVitals();
