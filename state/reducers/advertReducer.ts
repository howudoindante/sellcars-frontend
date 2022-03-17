import { AdvertState, Advert, AdvertAction, AdvertActionTypes } from "../../types/Advert"


const initialState:AdvertState = {
    adverts:[],
    isLoading:false,
};


export const advertReducer = (state:AdvertState = initialState,action:AdvertAction) => {
    switch(action.type){
        case AdvertActionTypes.SET_ADVERT:
            return {...state,adverts:action.payload};
            break;
        default:
            return state;
    }
}
