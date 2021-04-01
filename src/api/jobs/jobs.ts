import { RouteComponentProps } from "react-router-dom";
import Instance from "../Instance";

export const JobsAPI = {
    list() {
        return Instance.get('/adverts/list').then(res => res.data);
    },
    id(id: RouteComponentProps<{id: string}>) {
        return Instance.get(`/adverts/${id}`).then(res => res.data);
    }
};

