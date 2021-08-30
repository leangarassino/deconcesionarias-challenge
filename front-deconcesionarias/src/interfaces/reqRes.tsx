export interface ReqResListado {
    page:        number;
    per_page:    number;
    total:       number;
    total_pages: number;
    data:        Usuarios[];
    support:     Support;
}

export interface Usuarios {
    id:         number;
    email:      string;
    first_name: string;
    last_name:  string;
    avatar:     string;
}

export interface Support {
    url:  string;
    text: string;
}

export interface Users {
    id:        number;
    name:      string;
    email:     string;
    createdAt: Date;
    updatedAt: Date;
}

export interface Vehicles {
    id:        number;
    name:      string;
    brand:     string;
    model:     number;
    image:     string;
    createdAt: Date;
    updatedAt: Date;
}

export interface Properties {
    id:         number;
    name:       string;
    value:      number;
    categoryId: number;
    createdAt:  Date;
    updatedAt:  Date;
}

export interface Categories {
    id:        number;
    name:      string;
    icon:      string;
    createdAt: Date;
    updatedAt: Date;
}