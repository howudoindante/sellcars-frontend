import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { getToken } from '../constants/Token';
import { setAdvertRequestError, setAdverts } from '../state/actions/adverts';
import { AdvertActionTypes, IAdvertDispatch } from '../types/Advert';

interface IQueryParams {
  fromPrice?: number;
  toPrice?: number;
  title?: string;
  author?: string;
  skip: number;
  limit: number;
}
const baseurl = `${process.env.backendPath}/advert`;
// Get advert by query request
export async function getAdvertById(id: string) {
  try {
    let config = createRequestConfig({}, true);
    const response = await axios.get(baseurl + `/${id}`, config);
    return response.data;
  } catch (e) {
    throw e;
  }
}

export function getAdvertsByQuery(query?: IQueryParams) {
  return async (dispatch) => {
    dispatch({ type: AdvertActionTypes.START_LOADING });
    try {
      const filterUrl = getFilterLink(query);
      const url = filterUrl ? baseurl + filterUrl : baseurl;
      const response = await axios.get(url);
      dispatch(setAdverts(response.data));
      dispatch({ type: AdvertActionTypes.END_LOADING });
    } catch (e) {
      dispatch(setAdvertRequestError(e.response.data.message));
      dispatch({ type: AdvertActionTypes.END_LOADING });
    }
  };
}

//Create advert: recieved params [price,title,description,img +  authorization header  in request query]

export function createAdvert(data) {
  try {
    if (!getToken()) {
      return;
    }
    const config = createRequestConfig({}, true);
    axios.post(baseurl, data, config);
  } catch (e) {
    console.error(e);
  }
}

//Remove advert: recieved params [id +  authorization header  in request body]
export function deleteAdvert(id) {
  try {
    if (!getToken()) {
      return;
    }
    const config = createRequestConfig({}, true);
    axios.delete(baseurl + `/${id}`, config);
  } catch (e) {
    console.error(e);
  }
}
//Edit advert: recieved params [id + params to change +  authorization header  in request body]

export function editAdvert(id, data) {
  try {
    if (!getToken()) {
      return;
    }
    const config = createRequestConfig({}, true);
    axios.put(baseurl + `/${id}`, data, config);
  } catch (e) {
    console.error(e);
  }
}

function getFilterLink(data: IQueryParams) {
  const filterPath = ['/?'];

  if (data) {
    for (let key in data) {
      if (data[key] !== undefined) {
        filterPath.push(`${key}=${data[key]}`);
      }
    }
    return filterPath.join('&');
  }
  return null;
}

function createRequestConfig(config: AxiosRequestConfig, applyToken?: boolean) {
  if (applyToken && getToken()) {
    return {
      ...config,
      headers: {
        authorization: `Bearer ${getToken()}`,
      },
    };
  }
  return {
    ...config,
  };
}
