import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3333'

const api = axios.create();

export default api;
