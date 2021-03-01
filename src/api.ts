import axios from "axios";

const api = axios.create({
    baseURL: 'https://dsdeliver-api-springboot.herokuapp.com'
});

export default api;