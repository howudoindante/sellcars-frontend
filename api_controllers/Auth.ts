import axios, { AxiosResponse } from 'axios';

//TODO: переименовать экшн установки ошибки на setError
import { createAuthErrorAction, createAuthAction } from '../state/actions/auth';
import { IAuthDispatch, AuthActionsTypes } from '../types/Auth';

export type serviceName = 'login' | 'register'


interface IRequestCreator {
  serviceName:serviceName;
  body: {
    username: string;
    password: string;
  };
  dispatch: IAuthDispatch;
}

export const authController = ({
  serviceName,
  body,
  dispatch,
}: IRequestCreator) => {
  try{
    let callback: (response: AxiosResponse) => void;
  switch (serviceName) {
    case 'login':
      callback = (response) => {
        dispatch(createAuthAction(response.data.token));
        dispatch({ type: AuthActionsTypes.END_LOADING });
      };
      break;
    case 'register':
      callback = (response) => {
        if(response.status !== 200){
        }
        dispatch({ type: AuthActionsTypes.END_LOADING });
      };
      break;
  }
  dispatch({ type: AuthActionsTypes.START_LOADING });
  axios
    .post(`${process.env.backendPath}/auth/${serviceName}`, body)
    .then(callback)
    .catch((e)=>{
        dispatch(createAuthErrorAction(e.response.data.message));
        dispatch({ type: AuthActionsTypes.END_LOADING });
    })
  }
  catch(e){
      console.log(e);
  }
};
