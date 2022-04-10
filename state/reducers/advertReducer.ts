import { AdvertState, AdvertAction, AdvertActionTypes } from "../../types/Advert"


const initialState:AdvertState = {
    adverts:{
        ad: [],
        count:0
    },
    isLoading:false,
    error:false
};


export const advertReducer = (state:AdvertState = initialState,action:AdvertAction) => {
    switch(action.type){
        case AdvertActionTypes.START_LOADING:
            return { ...state, isLoading: true };
            break;
        case AdvertActionTypes.END_LOADING:
            return { ...state, isLoading: false };
            break;
        case AdvertActionTypes.SET_ERROR:
            return { ...state, error: action.payload };
            break;
        case AdvertActionTypes.SET_ADVERTS:
            return {...state,adverts:action.payload};
            break;
        default:
            return state;
    }
}
