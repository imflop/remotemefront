import axios from 'axios';

const MainInstance = axios.create({
    baseURL: 'https://localhost:8000/api/v1',
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