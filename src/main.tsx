import React from 'react'
import ReactDOM from 'react-dom/client'
/* ReactDOM é a adaptação para o React funcionar dentro do DOM (árvore de elementos) */
import App from './App'
import { ApolloProvider } from '@apollo/client' //import necessário para utilizarmos useQuery no App.tsx

import './styles/global.css'
import { client } from './lib/apollo'

/* Método inicial que seta a DIV (#root) do HTML como o elemento
 onde será mostrada (renderizada) toda a nossa aplicação (App) */
ReactDOM.createRoot(document.getElementById('root')!).render(
  /* App é uma função criada no App.tsx */
  /* Tudo que estiver dentra dessa função é o que será exibido no site */
  
  /* Para utilizarmos useQuery no App.tsx, precisamos envolver o <App />
  com o componente <ApolloProvider> e </ApolloProvider> conforme abaixo */
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
)
