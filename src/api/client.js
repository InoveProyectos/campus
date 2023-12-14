import axios from 'axios'

const baseURL = "http://admin.inovecode.com"

export const client = axios.create({
    baseURL: baseURL,
    withCredentials: true  // Equivalent to credentials: "include"
});
