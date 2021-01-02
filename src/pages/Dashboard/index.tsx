import React, { useState, useEffect } from 'react';
import api from '../../services/api'; // api para ser consumida, foi usado axios

import { Title, Loading, Livros } from './styles';

// tipagem coisa linda
interface Livro {
  CodLivro: number;
  CodConteudo: number;
  Nome: string;
}

const Dashboard: React.FC = () => {
  // declaração dos estados
  const [livros, setLivros] = useState<Livro[]>([]); // estado onde será armazenado os objetos da API
  const [isLoading, setIsLoading] = useState(true); // estado para armazenar o carregamento da página
  const [fail, setFail] = useState(false); // estado para informar quando a APi retornar erro 500

  useEffect(() => {
    async function loadAPI(): Promise<void> {
      setIsLoading(true);

      // este try serve para "pegar" o erro 500, quando a requisição falhar
      // notei depois que a própria requisiçao informa o erro, porém como de costume, utilizei o try - catch
      try {
        // consome a API
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

  return (
    <>
      {/* caso tenha sucesso ao consumir a API, exibe a mensagem para explorar os livros, caso contrário informará um erro */}
      <Title>
        {!fail
          ? 'Explore livros fantásticos'
          : 'Oops.. Falha ao carregar a página'}
      </Title>

      {/* notifica carregamento dos livros */}
      <Loading>{!!isLoading && <span>Carregando...</span>}</Loading>

      {/* percorre todos livros retornados da Api.
      para cada livro, exibe a imagem junto um link para direcionar para página de mais informações */}
      <Livros>
        {livros.map((livro) => (
          <a
            key={livro.CodLivro}
            // existe um problema para conseguir linkar a página do conteúdo do livro.
            // por exemplo, o livro de codigo 5791, vem sem o zero, porém a página precisa deste 0 para ficar 05791.
            // a solução encontrada foi: quando o código for menor que 10000, concatenar um 0 antes
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
};

export default Dashboard;
