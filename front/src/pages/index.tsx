import React from 'react';
import type { AppProps } from 'next/app';

export default function Home({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}
