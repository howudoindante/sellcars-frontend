import { AuthActionsTypes } from "../../types/Auth";
import { AuthAction } from "../reducers/authReducer";


export const setAuthError = ( error : string | boolean ):AuthAction => ({type:AuthActionsTypes.SET_ERROR, payload:error});