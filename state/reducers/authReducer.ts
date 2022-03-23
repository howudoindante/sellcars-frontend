import { AuthAction, AuthActionsTypes, AuthState } from "../../types/Auth";


const initialState: AuthState = {
    token: null,
    isLoading: false,
    error : false
};


export const authReducer = (state: AuthState = initialState, action: AuthAction) => {
    switch (action.type) {
        case AuthActionsTypes.SET_TOKEN:
            return { ...state, token: action.payload };
            break;
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
