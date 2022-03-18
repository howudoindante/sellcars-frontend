import { TokenAction, TokenActionsTypes, TokenState } from "../../types/Token";


const initialState: TokenState = {
    token: null,
    isLoading: false,
};


export const tokenReducer = (state: TokenState = initialState, action: TokenAction) => {
    switch (action.type) {
        case TokenActionsTypes.SET_TOKEN:
            return { ...state, token: action.payload };
            break;
        case TokenActionsTypes.START_LOADING:
            return { ...state, isLoading: true };
            break;
        case TokenActionsTypes.END_LOADING:
            return { ...state, isLoading: false };
            break;
        default:
            return state;
            break;
    }
}
