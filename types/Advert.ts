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
// {
//     "ad": {
//         "_id": "6225d0b51db2c8194a56023e",
//         "title": "212442214241",
//         "price": 10,
//         "description": "hehhehhe",
//         "image": "https://kolesa-uploads.ru/-/824efe71-5ce5-46e4-a793-6220d27c0398/bmw-m4.jpg",
//         "author": "marcusblanco",
//         "status": "Продано",
//         "__v": 0
//     }
// }


export interface IAdvertDispatch {
    (a: any ) : any;
}