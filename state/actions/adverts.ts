import { AdvertActionTypes } from "../../types/Advert";

export const setAdverts = (data:Advert) => ({type:AdvertActionTypes.SET_ADVERTS,payload:data});
export const setAdvertRequestError = ( error : string | boolean ) => ({type:AdvertActionTypes.SET_ERROR, payload:error});