import axios from 'axios';

const api = axios.create({
  baseURL: 'https://bartender-smart.herokuapp.com'
})

export default api;
