import { FilterActionTypes } from "../../types/Filter";
import { FilterAction, FilterState } from "../reducers/filterReducer";

export const setFilter = (query:FilterState):FilterAction => ({type:FilterActionTypes.SET_FILTERS,payload:query});
export const clearFilter = ():FilterAction => ({type:FilterActionTypes.CLEAR_FILTERS});
