import axios from "axios";

const product_url = 'https://strapi-store-server.onrender.com/api';

export const customFetch = axios.create({
    baseURL: product_url,
});