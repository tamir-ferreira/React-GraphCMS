import React from 'react'
import ReactDOM from 'react-dom/client'
/* ReactDOM é a adaptação para o React funcionar dentro do DOM (árvore de elementos) */
import App from './App'
import './styles/global.css'

/* Método inicial que seta a DIV (#root) do HTML como o elemento
 onde será mostrada (renderizada) toda a nossa aplicação (App) */
ReactDOM.createRoot(document.getElementById('root')!).render(
  /* App é uma função criada no App.tsx */
  /* Tudo que estiver dentra dessa função é o que será exibido no site */
  <React.StrictMode>
      <App />
  </React.StrictMode>
)
