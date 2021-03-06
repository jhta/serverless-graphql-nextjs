import { NextComponentType, NextPageContext } from 'next';
import App from 'next/app';
import { Router } from 'next/dist/client/router';
import React from 'react';
import { Provider as AuthProvider } from 'next-auth/client';
import StoreProvider from 'store/Provider'
import { ApolloProvider } from '@apollo/react-hooks'
import apolloClient from 'lib/apollo-client'
import 'styles/global.css'
import 'react-input-range/lib/css/index.css'

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
          <AuthProvider session={session}>
            <div className='wrapper'>
              <Component {...pageProps} />
            </div>
        </AuthProvider>
        </ApolloProvider>
      </StoreProvider>
    );
  }
}

export default CustomApp;
