import { AdvertState, Advert, AdvertAction, AdvertActionCodeNames } from "../../types/Advert"


const initialState:AdvertState = {
    adverts:[],
    isLoading:false,
};


export const advertReducer = (state:AdvertState = initialState,action:AdvertAction) => {
    switch(action.type){
        case AdvertActionCodeNames.SET_ADVERT:
            return {...state,adverts:action.payload};
            break;
        default:
            return state;
    }
}
