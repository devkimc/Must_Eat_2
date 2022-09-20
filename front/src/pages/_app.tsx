import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { ToastContainer, Flip } from 'react-toastify';
import type { AppProps } from 'next/app';

import GlobalStyle from 'style/GlobalStyle';
import store from 'store/store';
import 'react-toastify/dist/ReactToastify.css';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            useErrorBoundary: true,
            staleTime: Infinity,
        },
    },
});

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <Provider store={store}>
                    <Component {...pageProps} />;
                    <GlobalStyle />
                    <ToastContainer
                        transition={Flip}
                        position="top-center"
                        autoClose={2000}
                        closeOnClick
                        pauseOnHover
                    />
                </Provider>
            </QueryClientProvider>
        </>
    );
}
