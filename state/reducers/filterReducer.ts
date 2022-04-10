import { FilterActionTypes } from "../../types/Filter";

export interface FilterState {
    title?: string;
    fromPrice?: number;
    toPrice?: number;
    skip?: number;
    limit?:number;
}



const initialState: FilterState = {
    title: "",
    fromPrice : 0,
    toPrice: Infinity,
    skip:0,
    limit:12
};

export interface FilterAction {
    type: `${FilterActionTypes}`;
    payload?: FilterState
}


export const filterReducer = (state: FilterState = initialState, action: FilterAction) => {
    switch (action.type) {
        case FilterActionTypes.SET_FILTERS:
            return { ...state, ...action.payload };
            break;
        case FilterActionTypes.CLEAR_FILTERS:
            return { ...state, ...initialState };
            break;
       
        default:
            return state;
            break;
    }
}