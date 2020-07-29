import axios from 'axios';

// http://10.0.2.2:3333

// 'http://192.168.1.67:3333'

const api = axios.create({
  baseURL: 'http://10.0.2.2:3333',
});

export default api;
