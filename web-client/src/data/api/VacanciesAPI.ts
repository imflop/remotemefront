import {GenericAPI} from "./GenericAPI";
import {Scope, VacancyInfo, VacancyShortInfo} from "../types";
import MainInstance from "./MainInstance";

export class VacanciesAPI extends GenericAPI {
    async fetchVacancies(): Promise<VacancyShortInfo[]> {
        return await MainInstance.get('/adverts/list')
            .then(r => r.data.results)
    }

    async fetchVacancy(uuid: {uuid: VacancyShortInfo['uuid']}): Promise<VacancyInfo> {
        return await MainInstance.get(`/adverts/${uuid}`)
            .then(this.success)
    }

    async fetchScopes(): Promise<Scope[]> {
        return await MainInstance.get('/scope/list').then(r => r.data)
    }
}