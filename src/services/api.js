import { http } from './http';

export const postNewsletter = async dados => await http.post('/newsletter', dados).catch(e => e.response);

export const getProducts = async () =>
    http
        .get(`/products`)
        .catch(e => e.response);