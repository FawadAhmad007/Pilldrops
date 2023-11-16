import axios from "axios";
import { useSelector } from "react-redux";
import { store } from "../redux/store";

export const isLive = true
//const token = store.getState()?.auth?.token;
//console.log("token...", store.getState()?.auth?.token)

const BASE_URL = isLive ? "https://testadmin.pilldrop.ai" : ""
const baseUrl = axios.create({
    baseURL: `${BASE_URL}`,

});
baseUrl.interceptors.request.use(
    async function (config) {
        config.headers = {
            ...config.headers,
        };

        const token = store.getState()?.auth?.token;
        console.log("token...", token)
        config.headers.Authorization = `Bearer ${token}`;
        // console.log("config header", config, userLang)
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

baseUrl.interceptors.response.use(function (response) {
    if (response.status === 401) {
    }
    return response;
});

export { baseUrl };
