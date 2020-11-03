import { ApolloClient, ApolloLink, InMemoryCache } from '@apollo/client'
import { onError } from 'apollo-link-error'
import { createHttpLink } from 'apollo-link-http'

function createOmitTypenameLink() {
  return new ApolloLink((operation, forward) => {
    if (operation.variables) {
      operation.variables = JSON.parse(
        JSON.stringify(operation.variables),
        omitTypename
      )
    }

    return forward(operation)
  })
}

function omitTypename(key: string, value: any): undefined | any {
  return key === '__typename' ? undefined : value
}

const endpoint = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT

const httpLink = createHttpLink({ uri: endpoint })
const errorLink = onError(({ networkError }) => {
  console.log('error handler', networkError)
})
const omitTypenameLink = createOmitTypenameLink()

const link = ApolloLink.from([
  omitTypenameLink,
  (errorLink as unknown) as ApolloLink,
  (httpLink as unknown) as ApolloLink,
])

const client = new ApolloClient({
  // uri: process.env.GRAPHQL_ENDPOINT,
  link,
  cache: new InMemoryCache(),
})

export default client
