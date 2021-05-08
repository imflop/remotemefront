import React from "react";
import {VacanciesAPI} from "./VacanciesAPI";


export class API {
    vacancies: VacanciesAPI;

    constructor() {
        this.vacancies = new VacanciesAPI();
    }
}

export const APIContext = React.createContext<API>(new API());