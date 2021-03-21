import {instance} from "./Instance";

export const VacanciesAPI = {
    list() {
        return instance.get('/adverts/list').then(res => res.data);
    },
};

