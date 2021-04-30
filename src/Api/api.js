import axios from 'axios'

const api = axios.create({
    baseURL: 'http://192.168.15.76:3333'
});

//json-server path --host ip --port porta

export default api;