import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.0.2.2:3333', // Estou usando esse endereço pois estou utilizando emulador do Android Studio
});

export default api;
