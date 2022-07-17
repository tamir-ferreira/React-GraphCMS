import { ApolloClient, InMemoryCache } from "@apollo/client";

/* linkando com a API do graphCMS */
export const client = new ApolloClient({
    /* em javaScript utilizamos process.env para importar variáveis de ambiente */
    /* aqui utilizamos import.meta.env */

    /* Necessário para acessar o Graph CMS e consultar os dados das aulas */
    uri: import.meta.env.VITE_API_URL,

    /* Necessário para enviar ao Graph CMS os dados de preenchimento do formulário */
    headers: {
        'Authorization': `Bearer ${import.meta.env.VITE_API_ACCESS_TOKEN}`
    },
         cache: new InMemoryCache()
})