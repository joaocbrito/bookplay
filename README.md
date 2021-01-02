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

Primeiramente vou mostrar o axios que foi utilizado para consumir a API.

```js
import axios from 'axios';

const api = axios.create({
  baseURL:
    'https://bmain.bookplay.com.br/parceiros/6BB6F620/recrutamento/top10/acessos',
});

export default api;
```


Foi feito a tipagem dos dados recebidos da API, não utilizei o "sucess" da requisição, pois opter em usar um try catch de costume.

```js
interface Livro {
  CodLivro: number;
  CodConteudo: number;
  Nome: string;
}
export default api;
```


Usei o conceito de estados para atribuir os valores da requisição e algumas variáveis de loading.

```js
  const [livros, setLivros] = useState<Livro[]>([]); 
  const [isLoading, setIsLoading] = useState(true);
  const [fail, setFail] = useState(false); 
```

Aqui foi usado uma async function para consumir a api e já inserimos os dados dos livros em _livros_.
Também fiz o tratamento loading da página e caso acontecer o erro 500 de falha, fazemos o tratamento no try catch.


```js
  useEffect(() => {
    async function loadAPI(): Promise<void> {
      setIsLoading(true);
      try {
        const response = await api.get('/');

        setLivros(response.data.data);

        setFail(false);
      } catch (err) {
        setFail(true);
      }
      setIsLoading(false);
    }
    loadAPI();
  }, []);
```

Nessa parte é onde é renderizado todo o html e css da página, notamos que tem as tag _<Title>_ e _<Livros>_. Estes componentes foi criado em styles.ts e importado no index.tsx. Foi usado a biblioteca styled-components para fazer esta mágica.
Também foi usado um map para percorres cada livro de _livros_, dessa forma foi usado um link com uma imagem para cada item retornado da nossa API.
Podemos notar que alguns códigos estão diferentes da página onde há o conteúdo, isso acontece porque o link está em string e o _CodLivro_
 vem em number, por exemplo, o número vem 5777 mas para encontrar a página do conteúdo precisaria ser 05777. Assim foi feito um if alternário caso o número for menor que 10000, terá um 0 na frente.
  
```js
  return (
    <>
      <Title>
        {!fail
          ? 'Explore livros fantásticos'
          : 'Oops.. Falha ao carregar a página'}
      </Title>

      <Loading>{!!isLoading && <span>Carregando...</span>}</Loading>

      <Livros>
        {livros.map((livro) => (
          <a
            key={livro.CodLivro}
            href={`https://bookplay.com.br/conteudo/${
              livro.CodLivro < 10000 ? '0' : ''
            }${livro.CodLivro}`}
          >
            <img
              src={`https://bookplay.com.br/images/livros/${
                livro.CodLivro < 10000 ? '0' : ''
              }${livro.CodLivro}/Imagem.jpg`}
              alt={livro.Nome}
            />
          </a>
        ))}
      </Livros>
    </>
  );
```


