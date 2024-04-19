import { createGlobalStyle } from 'styled-components'

export const cores = {
  vermelho: '#E66767',
  bege: '#FFEBD9',
  amarelo: '#FFB930',
  branco: '#fff',
  branco2: '#FFF8F2'
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
}
`
