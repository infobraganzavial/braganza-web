import axios from 'axios';

const BASE_URL = process.env.URL_API || 'http://localhost:8000/api/';

console.log(BASE_URL, "BASE_URL")

const api = axios.create({
    baseURL: BASE_URL,
});

api.interceptors.request.use(
    (req) => {
        // TODO: Agregar lista de request con headers y tokens.
        // Do something before request is sent
        return req;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response) => {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
    },
    function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
    }
);

const { get, post, put } = api;
export { get, post, put };