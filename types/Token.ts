export enum TokenActionsTypes{
    SET_TOKEN = 'SET TOKEN',
    REMOVE_TOKEN = 'REMOVE TOKEN',
    START_LOADING = 'START LOADING',
    END_LOADING = 'END LOADING',
}

export interface TokenState {
    token: string | null;
    isLoading: boolean;
}

export interface TokenAction {
    type: `${TokenActionsTypes}`;
    payload: TokenState[keyof TokenState];
}


interface LoadingAction{
    type: Extract<TokenActionsTypes,TokenActionsTypes.START_LOADING | TokenActionsTypes.END_LOADING>
}



export interface ITokenDispatch {
    (a:TokenAction | LoadingAction) : any;
}