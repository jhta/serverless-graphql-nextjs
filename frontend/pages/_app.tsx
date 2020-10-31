import { NextComponentType, NextPageContext } from 'next';
import App from 'next/app';
import { Router } from 'next/dist/client/router';
import React from 'react';
import { Provider } from 'next-auth/client';
import StoreProvider from 'store/Provider'

type AppProps = {
  Component: NextComponentType<NextPageContext>
  router: Router
  pageProps: any
  err: any
};

export class CustomApp extends App<AppProps> {
  render () {
    const { Component, pageProps } = this.props;
      const { session, initialState } = pageProps;

    return (
      <StoreProvider initialState={initialState}>
        <Provider session={session}>
          <div className='wrapper'>
            
            <Component {...pageProps} />
          </div>
        </Provider>
      </StoreProvider>
    );
  }
}

export default CustomApp;
