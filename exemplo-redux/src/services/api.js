import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333',
});
//'json-server server.json -p 3333 comando rodar api'
export default api;
