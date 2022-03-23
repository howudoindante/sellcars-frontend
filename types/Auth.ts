export enum AuthActionsTypes{
    SET_TOKEN = 'SET TOKEN',
    REMOVE_TOKEN = 'REMOVE TOKEN',
    START_LOADING = 'START LOADING',
    END_LOADING = 'END LOADING',
    SET_ERROR = "SET ERROR"
}

export interface AuthState {
    token: string | null;
    isLoading: boolean;
    error: boolean | string;
}

export interface AuthAction {
    type: `${AuthActionsTypes}`;
    payload: AuthState[keyof AuthState];
}


interface LoadingAction{
    type: Extract<AuthActionsTypes,AuthActionsTypes.START_LOADING | AuthActionsTypes.END_LOADING>
}



export interface IAuthDispatch {
    (a:AuthAction | LoadingAction) : any;
}