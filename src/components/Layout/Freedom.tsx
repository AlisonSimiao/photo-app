import React from 'react'
import { LayoutProps } from '.';
import Mobile from '../Menu/mobile';

function Freedom({ Component, pageProps }: LayoutProps) {
    return (
        <React.Fragment>
            <Component {...pageProps} />
        </React.Fragment>
    )
}

export default Freedom