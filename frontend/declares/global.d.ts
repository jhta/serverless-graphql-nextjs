declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production'
      GRAPHQL_ENDPOINT: string
      NEXT_PUBLIC_GRAPHQL_ENDPOINT: string
    }
  }
}
