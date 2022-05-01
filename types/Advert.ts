export enum AdvertActionTypes{
    SET_ADVERTS = 'SET ADVERTS',
    SET_ERROR = 'SET ERROR',
    CHANGE_ADVERT_STATUS = 'CHANGE ADVERT STATUS',
    START_LOADING = 'START LOADING',
    END_LOADING = 'END LOADING',
}

export enum AdvertStatuses {
    FOR_SALE = 'В продаже',
    SALED = 'Продано',
    ARCHIVED = 'В архиве',
}

export interface AdvertState {
    adverts: {
        ad: Advert[] | [];
        count: number;
    };
    isLoading: boolean;
    error: boolean | string;
}

export interface AdvertAction {
    type: `${AdvertActionTypes}`;
    payload?: any;
}




export interface Advert {
    _id:string;
    title: string;
    price: number;
    description: string;
    image: string;
    author: string;
    status: `${AdvertStatuses}`;
    _v:number;
}



export interface IAdvertDispatch {
    (a: any ) : any;
}