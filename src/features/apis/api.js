import axios from "axios";

const api = axios.create({
    baseURL: 'https://611cc257a18e850017decc4c.mockapi.io/'
});

export default api;