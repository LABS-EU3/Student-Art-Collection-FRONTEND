import axios from 'axios'

export const axiosWithBase = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

