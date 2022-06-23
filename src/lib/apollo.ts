import { ApolloClient, InMemoryCache } from "@apollo/client";

/* linkando com a API do graphCMS */
export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4r600ju0ot301yw6ayo55k5/master',
         cache: new InMemoryCache()
})