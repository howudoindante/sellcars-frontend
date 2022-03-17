export enum AdvertActionTypes {
    SET_ADVERT = "SET_ADVERT"
}


export type AdvertState = {
    adverts: Advert[] | [];
    isLoading: boolean;
}

export type AdvertAction = {
    type:`${AdvertActionTypes}`;
    payload?:any;
}

export type Advert = {
    
}