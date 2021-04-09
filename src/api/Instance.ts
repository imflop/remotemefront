import axios from "axios";

const Instance = axios.create({
    baseURL: 'http://localhost:8080/api/v1',
    responseType: "json"
});

// TODO: Обработка ошибок
Instance.interceptors.response.use((response: any) => {
    console.log("Response getted");
    return response;
}, function (error: any) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});

export default Instance;