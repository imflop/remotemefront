import {AxiosResponse, AxiosError} from "axios";

export abstract class GenericAPI {
    success<T>(response: AxiosResponse<T>): T {
        return response.data;
    }

    error<T> (error: AxiosError<T>): void {
        throw error;
    }
}