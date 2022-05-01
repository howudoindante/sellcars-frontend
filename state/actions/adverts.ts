import { AdvertActionTypes } from "../../types/Advert";

export const setAdverts = (data:Advert) => ({type:AdvertActionTypes.SET_ADVERTS,payload:data});
export const setAdvertsLoadingStart = () => ({type:AdvertActionTypes.START_LOADING});
export const setAdvertsLoadingEnd = () => ({type:AdvertActionTypes.END_LOADING});
export const setAdvertRequestError = ( error : string | boolean ) => ({type:AdvertActionTypes.SET_ERROR, payload:error});