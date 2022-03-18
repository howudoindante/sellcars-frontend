export enum AdvertActionCodeNames{
    SET_ADVERT = 'SET ADVERT',
    CHANGE_ADVERT_STATUS = 'CHANGE ADVERT STATUS',
}

export enum AdvertStatuses {
    FOR_SALE = 'В продаже',
    SALED = 'Продано',
    ARCHIVED = 'В архиве',
}

export interface AdvertState {
    adverts: Advert[] | [];
    isLoading: boolean;
}

export interface AdvertAction {
    type: `${AdvertActionCodeNames}`;
    payload?: any;
}

export interface Advert {
    title: string;
    price: number;
    description: string;
    image: string;
    author: string;
    status: `${AdvertStatuses}`;
}
