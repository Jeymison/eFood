import { createGlobalStyle } from 'styled-components'

export const cores = {
  vermelho: '#E66767',
  bege: '#FFEBD9',
  amarelo: '#FFB930',
  branco: '#fff',
  branco2: '#FFF8F2',
  preto: '#000'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const GlobalCSS = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  list-style: none;
}

body {
  background-color: ${cores.branco2};
  color:${cores.vermelho};/
  font-family: Roboto, sans-serif;
  text-decoration: none;
  list-style-type: none;
}

.container {
max-width: 1366px;
width: 100%;
margin: 0 auto;

@media (max-width: ${breakpoints.desktop}) {
  max-width: 80%;
}
}
`
