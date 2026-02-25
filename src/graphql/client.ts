import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://your-backend-url/graphql', // Replace with your backend GraphQL endpoint
  cache: new InMemoryCache(),
});

export default client;