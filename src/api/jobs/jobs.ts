import { PaginatedResponse } from "api/types";
import { RouteComponentProps } from "react-router-dom";
import Instance from "../Instance";

export const JobsAPI = {
    list() {
        return Instance.get<PaginatedResponse>('/adverts/list').then((res: { data: PaginatedResponse; }) => res.data);
    },
    id(id: RouteComponentProps<{id: string}>) {
        return Instance.get(`/adverts/${id}`).then(res => res.data);
    }
};

