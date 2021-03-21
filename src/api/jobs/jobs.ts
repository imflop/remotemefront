import Instance from "../Instance";

export const JobsAPI = {
    list() {
        return Instance.get('/adverts/list').then(res => res.data);
    },
    // id(id: string) {
    //     return instance.get('/adverts/list' + id).then(res => res.data);
    // },
};

