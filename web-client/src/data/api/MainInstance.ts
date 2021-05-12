import axios from 'axios';
import {RESTAPI_BASE_URL} from "../constants";

const MainInstance = axios.create({
    baseURL: RESTAPI_BASE_URL,
    responseType: "json"
});

MainInstance.interceptors.response.use((response: any) => {
    console.log("Response getted");
    return response;
}, function (error: any) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});

export default MainInstance;
