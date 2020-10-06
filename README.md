<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/joaocbrito/bookplay?color=%2304D361">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/joaocbrito/bookplay">

  <a href="https://github.com/joaocbrito/gostack11-primeiro-projeto-react/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/joaocbrito/bookplay">
  </a>

  <a href="https://github.com/joaocbrito/gostack11-primeiro-projeto-react/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/joaocbrito/bookplay">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
</p>

### Tecnologias utilizadas

- [React.js](https://pt-br.reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [React-router-dom](https://www.npmjs.com/package/react-router-dom)
- [Axios](https://www.npmjs.com/package/axios)
- [Styled Components](https://styled-components.com/docs/basics)

Também foram utilizadas tecnologias para padronização de código, são elas:
prettier, eslint e editorconfig.

### Executando a aplicação

```js
# Instalar dependências
yarn

# Execute o app
yarn start
```

### Execução 

Primeiramente vou mostrar oxios que foi utilizado para consumir a API.

```js
import axios from 'axios';

const api = axios.create({
  baseURL:
    'https://bmain.bookplay.com.br/parceiros/6BB6F620/recrutamento/top10/acessos',
});

export default api;

```
