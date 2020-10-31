import { ApolloClient, ApolloLink, InMemoryCache } from '@apollo/client'
import { onError } from 'apollo-link-error'
import { createHttpLink } from 'apollo-link-http'

const endpoint = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT
const httpLink = createHttpLink({ uri: endpoint })
const errorLink = onError(({ networkError }) => {
  console.log('error handler', networkError)
})

const link = errorLink.concat(httpLink)

const client = new ApolloClient({
  // uri: process.env.GRAPHQL_ENDPOINT,
  link: (link as unknown) as ApolloLink,
  cache: new InMemoryCache(),
})

export default client
