import axios, { AxiosResponse } from 'axios';
import { setAuthError } from '../state/actions/auth';

//TODO: переименовать экшн установки ошибки на setError
import { AuthActionsTypes } from '../types/Auth';

export type serviceName = 'login' | 'register';

interface IRequestCreatorParams {
  serviceName: serviceName;
  body: {
    username: string;
    password: string;
  };
}


export const authController = ({
  serviceName,
  body,
}: IRequestCreatorParams) => {
  return async (dispatch) => {
    dispatch({type:AuthActionsTypes.START_LOADING});
    try {
      const response = await axios.post(
        `${process.env.backendPath}/auth/${serviceName}`,
        body
      );
      if (response.status !== 200) {
        dispatch(setAuthError(response.data.message));
      }
      response.data.token
        ? (document.cookie = `utoken=${response.data.token}`)
        : null;
      dispatch({ type: AuthActionsTypes.END_LOADING });
    } catch (e) {
      dispatch(setAuthError(e.response.data.message));
      dispatch({ type: AuthActionsTypes.END_LOADING });
    }
  };
};
