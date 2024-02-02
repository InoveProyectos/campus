import axios from 'axios'

//const baseURL = "http://admin.inovecode.com"
const baseURL = "http://127.0.0.1"

export const client = axios.create({
    baseURL: baseURL,
    withCredentials: true  // Equivalent to credentials: "include"
});
