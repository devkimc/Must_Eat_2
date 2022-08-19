import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { ToastContainer, Flip } from 'react-toastify';

import GlobalStyle from 'style/GlobalStyle';
import store from 'store/store';
import App from './App';
import 'react-toastify/dist/ReactToastify.css';

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <QueryClientProvider client={queryClient}>
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
        </Provider>
    </QueryClientProvider>,
);
