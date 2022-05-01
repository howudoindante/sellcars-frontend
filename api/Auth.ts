import axios, { Axios, AxiosError, AxiosResponse } from 'axios';
import { setToken } from '../constants/Token';
import { setAuthError } from '../state/actions/auth';
import { AuthActionsTypes } from '../types/Auth';

export type serviceName = 'login' | 'register';
const baseUrl = `${process.env.backendPath}/auth`;
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
    dispatch({ type: AuthActionsTypes.START_LOADING });
    try {
      const response =
        serviceName === 'login' ? await login(body) : await register(body);
      response.status !== 200 && dispatch(setAuthError(response.data.message));
      response.data.token && setToken(response.data.token);
      dispatch({ type: AuthActionsTypes.END_LOADING });
    } catch (e) {
      dispatch(setAuthError(e.response.data.message));
      dispatch({ type: AuthActionsTypes.END_LOADING });
    }
  };
};

// Login service
async function login(body) {
  return await axios.post(`${baseUrl}/login`, body);
}
// Register service
async function register(body) {
  return await axios.post(`${baseUrl}/register`, body);
}


