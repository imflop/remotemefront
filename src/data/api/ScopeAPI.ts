import { GenericAPI } from "./GenericAPI";
import MainInstance from "./MainInstance";
import { Scopes } from "../types";

export class ScopeAPI extends GenericAPI {
    async fetchScopes(): Promise<Scopes[]> {
        return await MainInstance.get('/scope/list').then(r => r.data)
    }
}