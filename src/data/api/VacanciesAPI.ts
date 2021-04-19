import {GenericAPI} from "./GenericAPI";
import {VacancyInfo, VacancyShortInfo} from "../types";
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
}