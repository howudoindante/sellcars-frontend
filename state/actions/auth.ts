import { AuthAction, AuthActionsTypes } from "../../types/Auth";

export const createAuthAction = (token:string):AuthAction => ({type:AuthActionsTypes.SET_TOKEN,payload:token});
export const createAuthErrorAction = (error:string|boolean):AuthAction => ({type:AuthActionsTypes.SET_ERROR,payload:error});