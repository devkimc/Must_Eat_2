import React from 'react';
import { createGlobalStyle } from 'styled-components';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import { ToastContainer } from 'react-toastify';

import App from './App';
import 'assets/css/index.css';
import 'assets/css/reset.css';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'GangwonEdu_OTFBoldA';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/GangwonEdu_OTFBoldA.woff') format('woff');
      font-weight: normal;
      font-style: normal;
  }

  @font-face {
      font-family: 'LeferiPoint-WhiteObliqueA';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/LeferiPoint-WhiteObliqueA.woff') format('woff');
      font-weight: normal;
      font-style: normal;
  }
  
  body {
    font-family: 'GangwonEdu_OTFBoldA';
  }
  
  a {
    text-decoration: none;
  }

  input {
    border: none;
    outline: none;
  }
  
  button {
    outline: none;
    background-color: transparent;
    cursor: pointer;
  }
`;

root.render(
    <RecoilRoot>
        <App />
        <GlobalStyle />
        <ToastContainer autoClose={1000} />
    </RecoilRoot>,
);
