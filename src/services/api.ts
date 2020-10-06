import axios from 'axios';

const api = axios.create({
  baseURL:
    'https://bmain.bookplay.com.br/parceiros/6BB6F620/recrutamento/top10/acessos',
});

export default api;
