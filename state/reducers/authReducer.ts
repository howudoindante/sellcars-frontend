import {AuthActionsTypes} from "../../types/Auth";

export interface AuthState {
    isLoading: boolean;
    error: boolean | string;
}

export interface AuthAction {
    type:`${AuthActionsTypes}`,
    payload: AuthState[keyof AuthState];
}

const initialState: AuthState = {
    isLoading: false,
    error : false
};


export const authReducer = (state: AuthState = initialState, action: AuthAction) => {
    switch (action.type) {
        case AuthActionsTypes.START_LOADING:
            return { ...state, isLoading: true };
            break;
        case AuthActionsTypes.END_LOADING:
            return { ...state, isLoading: false };
            break;
        case AuthActionsTypes.SET_ERROR:
            return { ...state, error: action.payload };
            break;
        default:
            return state;
            break;
    }
}
