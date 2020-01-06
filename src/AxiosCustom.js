import axios from 'axios'

export const axiosWithBase = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {authorization: localStorage.getItem('authorization') ? localStorage.getItem('authorization') : null},
});

