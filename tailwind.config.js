/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      /* criando uma propriedade pra inserir uma imagem de background */
      backgroundImage: {
        blur: "url(src/assets/blur-background.png)"
      },
      /* Incluir uma fonte externa, primeiro incluir o Link no index.html, depois configurar aqui o tailwind */
      fontFamily: {
        sans: 'Roboto, sans-serif'
      },
      /* Extender as cores do Tailwind para usar cores diferentes das pré-configuradas */
      colors: {
        green: {
          300: '#00B37E',
          500: '#00875F',
          700: '#015F43',
        },
        blue: {
          500: '#81D8F7',
        },
        orange: {
          500: '#FBA94C',
        },
        red: {
          500: '#F75A68',
        },
        gray: {
          100: '#E1E1E6',
          200: '#C4C4CC',
          300: '#8D8D99',
          500: '#323238',
          600: '#29292E',
          700: '#121214',
          900: '#09090A'
        }
      },
    },
  },
  plugins: [],
}
