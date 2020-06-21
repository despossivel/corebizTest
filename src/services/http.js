import axios from 'axios';

const {
    REACT_APP_SOCKET_HOST
} = process.env;
 
const headers = {
    'Content-Type': 'application/json',
};

export const http = axios.create({
    baseURL: REACT_APP_SOCKET_HOST,
    headers,
});