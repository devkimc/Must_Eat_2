import React from 'react';
import Head from 'next/head';

function MyApp() {
    return (
        <>
            <Head>
                <title>Porject title</title>
                <link rel="shortcut icon" href="/favicon.png" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
            </Head>
        </>
    );
}

export default MyApp;
