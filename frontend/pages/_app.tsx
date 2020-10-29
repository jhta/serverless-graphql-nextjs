import { NextComponentType, NextPageContext } from 'next';
import App from 'next/app';
import { Router } from 'next/dist/client/router';
import React from 'react';
import { Provider } from 'next-auth/client';

type AppProps = {
  Component: NextComponentType<NextPageContext>
  router: Router
  pageProps: any
  err: any
};

export class CustomApp extends App<AppProps> {
  render () {
    const { Component, pageProps } = this.props;
      const { session } = pageProps;

    return (
      <Provider session={session}>
        <div className='wrapper'>
          <style jsx={true}>{`
            .wrapper {
              display: flex;
              flex-direction: column;
            }
          `}</style>
          <Component {...pageProps} />
        </div>
      </Provider>
    );
  }
}

export default CustomApp;
