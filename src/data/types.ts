export type FullAdvert = {
    uuid: string,
    short_description: string,
    long_description: string,
    created_at: string,
    stack: string[],
    scope: string,
    salary_from: number,
    salary_to: number,
    city: string,
    company_name: string,
    currency: string
};

export type ShortAdvert = {
    uuid: string,
    short_description: string,
    created_at: string,
    stack: string[],
    scope: string,
    salary_from: number,
    salary_to: number,
    city: string,
    company_name: string,
    currency: string
};

export type PaginatedResponse = {
    limit: number,
    offset: number,
    count: number,
    next: string,
    previous: string,
    results: ShortAdvert[]
};

export interface Scope {
    id: number,
    title: string
}

export interface VacancyInfo {
    "short_description": string,
    "long_description": string,
    "created_at": string,
    "stack": string[],
    "scope": string,
    "salary_from": number,
    "salary_to": number,
    "city": string,
    "company_name": string,
    "currency": string,
}

export interface VacancyShortInfo {
    "uuid": string,
    "short_description": string,
    "created_at": string,
    "stack": string[],
    "scope": string,
    "salary_from": number,
    "salary_to": number,
    "city": string,
    "company_name": string,
    "currency": string,
}