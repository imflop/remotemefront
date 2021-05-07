import React from "react";
import { ScopeAPI } from "./ScopeAPI";
import {VacanciesAPI} from "./VacanciesAPI";


export class API {
    vacancies: VacanciesAPI;
    scope: ScopeAPI;

    constructor() {
        this.vacancies = new VacanciesAPI();
        this.scope = new ScopeAPI();
    }
}

export const APIContext = React.createContext<API>(new API());