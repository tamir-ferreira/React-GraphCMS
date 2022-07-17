import React from 'react'
/* ReactDOM é a adaptação para o React funcionar dentro do DOM (árvore de elementos) */
import ReactDOM from 'react-dom/client'
import App from './App'

import './styles/global.css'


/* Método inicial que seta a DIV (#root) do HTML como o elemento
 onde será mostrada (renderizada) toda a nossa aplicação (App) */
ReactDOM.createRoot(document.getElementById('root')!).render(
  /* App é uma função criada no App.tsx */
  /* Tudo que estiver dentra dessa função é o que será exibido no site */
  
  /* Para utilizarmos useQuery no App.tsx, precisamos envolver o <App />
  com o componente <ApolloProvider> e </ApolloProvider> conforme abaixo */
  <React.StrictMode>
      <App />
  </React.StrictMode>
)
