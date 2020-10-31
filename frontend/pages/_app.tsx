import { NextComponentType, NextPageContext } from 'next';
import App from 'next/app';
import { Router } from 'next/dist/client/router';
import React from 'react';
import { Provider } from 'next-auth/client';
import StoreProvider from 'store/Provider'
import { ApolloProvider } from '@apollo/react-hooks'
import apolloClient from 'lib/apollo-client'

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
        <ApolloProvider client={apolloClient}>
          <Provider session={session}>
            <div className='wrapper'>
              <Component {...pageProps} />
            </div>
        </Provider>
        </ApolloProvider>
      </StoreProvider>
    );
  }
}

export default CustomApp;
