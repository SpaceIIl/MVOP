import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cle0fx6qg2y7x01ui50yb584q/master",
    cache: new InMemoryCache(),
});

export default client;