import axios from 'axios';

const api = axios.create({
    baseURL: 'http://10.0.3.2:3333/'
    // baseURL: 'http://rocketseat-node.herokuapp.com/api'
});

export default api;